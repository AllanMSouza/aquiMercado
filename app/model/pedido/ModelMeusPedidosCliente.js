Ext.define('AppName.model.pedido.ModelMeusPedidosCliente',{
    extend: 'Ext.data.Model', 
    idProperty: 'id_pedido',
    
    fields:[
        {name: 'id_pedido', type: 'int'},
        {name: 'data', type: 'string'},
        {name: 'valor_pedido', type: 'float'},
        {name: 'status', type: 'string'},
        {name: 'nome_lista', type: 'string'},
        {name: 'cliente_id_cliente', type: 'int'},
    ]
});
