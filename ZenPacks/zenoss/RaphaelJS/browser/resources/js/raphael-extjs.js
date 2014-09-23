// RAPHAEL RENDERING WINDOW STUFF:
Ext.define('Ext.ux.Raphael', {
    extend: "Ext.Component",
    alias: ['widget.raphaelpanel'],
    initComponent: function() {
        var me = this;
        this.callParent(arguments);
    },
    afterRender: function(ct) {
        this.callParent(arguments);
        var p = this.paper = Raphael(this.el.dom), v;
        this.canvasEl = Ext.get(p.canvas);

//      Export all methods from this paper object which will not override our native
//      methods like setSize etc.
        for (var prop in p) {
            v = p[prop];
            if (!this[prop] && Object.prototype.hasOwnProperty.call(p, prop) && Ext.isFunction(v)) {
                this[prop] = Ext.bind(v, p);
            }
        }

//      We always cache our size
        this.cacheSizes = true;
    },

    getWidth: function() {
        return this.canvasEl.getWidth();
    },

    getHeight: function() {
        return this.canvasEl.getHeight();
    }
});
/*
Ext.ux.Raphael = Ext.extend(Ext.BoxComponent, {
    onRender: function(ct) {
        var p = this.paper = Raphael(ct.dom), v;
        this.el = Ext.get(p.canvas);

//      Export all methods from this paper object which will not override our native
//      methods like setSize etc.
        for (var prop in p) {
            v = p[prop];
            if (!this[prop] && Ext.isFunction(v)) {
                this[prop] = v.createDelegate(p);
            }
        }

//      We always cache our size
        this.cacheSizes = true;
    },

    getWidth: function() {
        return this.lastSize.width;
    },

    getHeight: function() {
        return this.lastSize.height;
    },

    onResize: function(w, h) {
        this.paper.setSize(w, h);
    }
});
Ext.reg('raphael', Ext.ux.Raphael);
// end of file
*/