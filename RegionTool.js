Ext.define("Ext.ux.panel.RegionTool", {
    alias : 'plugin.regiontool',
    init  : function(parent) {
        this.parent = parent;
        this.parent.on({
            render : this.onParentRender,
            scope  : this
        });
    },

    onParentRender : function() {
        this.parent.addTool({
            type       : 'gear',
            callback   : function(panel, tool) {
                var regionMenu = panel.regionMenu || (panel.regionMenu =
                    Ext.widget({
                        xtype : 'menu',
                        items : [
                            {
                                text    : 'Top',
                                checked : panel.region === 'north',
                                group   : 'mainregion',
                                handler : function() {
                                    panel.setBorderRegion('north');
                                }
                            },
                            {
                                text    : 'Bottom',
                                checked : panel.region === 'south',
                                group   : 'mainregion',
                                handler : function() {
                                    panel.setBorderRegion('south');
                                }
                            },
                            {
                                text    : 'Right',
                                checked : panel.region === 'east',
                                group   : 'mainregion',
                                handler : function() {
                                    panel.setBorderRegion('east');
                                }
                            },
                            {
                                text    : 'Left',
                                checked : panel.region === 'west',
                                group   : 'mainregion',
                                handler : function() {
                                    panel.setBorderRegion('west');
                                }
                            }
                        ]
                    }));
                regionMenu.showBy(tool.el);
            }
        });
    }
});
