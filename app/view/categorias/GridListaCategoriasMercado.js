Ext.define('AppName.view.categorias.GridListaCategoriasMercado',{
	extend: 'Ext.grid.Panel',
	alias: 'widget.gridListaCategoriasMercado',
	id: 'gridListaCategoriasMercado',

	autoShow: true,
	store: 'categorias.StoreListaCategorias',

	margins: '0 0 0 0',

	tbar: [
		{
			text: 'Adicionar Categoria',
			action: 'add_categorias'
		},
		{
			text: 'Editar Categoria',
			action: 'edit'
		},
		{
			text: 'Excluir Categoria',
			action: 'delete'
		},
		
	],

	columns:[
		{
			header: 'Imagem',
			dataIndex: 'id_categorias',
			flex: 1,
			renderer: function(val){
               // console.log(val)
                return '<img style= "width: 70px; height: 60px; padding: 5px" align=top src="app/data/php/Categorias.php?action=getImagemCategorias&id_categorias='+ val +'"/>'
            }

		},
		{
			header: 'Categoria',
			dataIndex: 'nome_categoria',
			flex: 1
		},

	],

	listeners: {
		selectionchange:function(model, record){
			console.log(record[0].data)
			var proxy = Ext.getCmp('gridListaSubcategorias').store.getProxy()
			// console.log(proxy)
			proxy._api.read = 'app/data/php/Categorias.php?action=getCategorias&nomeCategoria=' + record[0].data.nome_categoria
			Ext.getCmp('gridListaSubcategorias').store.setProxy(proxy)
			Ext.getCmp('gridListaSubcategorias').store.load()
		}
	}
});