Ext.define('AppName.model.layout.ModelTreePanelCategorias',{
     extend: 'Ext.data.Model',
     
     idProperty: 'id_categorias',
     fields:[
         {name: 'id_categorias', type: 'int' },
         {name: 'nome_categoria', type: 'string'},
         {name: 'text', type: 'string'},
         {name: 'leaf', type: 'boolean'},
         {name: 'children', type: 'string'},
         {name: 'kit', type: 'boolean'},
         {name: 'id_kit', type: 'int'},
         {name: 'titulo', type: 'string'}
     ]   
});

