import Filter from './Filter'
cc.Class({
    extends: cc.Component,

    properties: {

    },
    onLoad() { },

    start() {
        //创建原生canvas
        let filter=new Filter(this.node.getComponent(cc.Sprite));
        filter.mosaic(canvas=>{
            var texture = new cc.Texture2D();
            texture.initWithElement(canvas);
            texture.handleLoadedTexture();
            var newframe = new cc.SpriteFrame(texture);
            this.node.getComponent(cc.Sprite).spriteFrame = newframe;
        },3)

    },
    update(dt) { },
});
