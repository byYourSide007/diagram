<template>
    <div class="right_stage">
<!--        右侧操作台-->
        <v-stage :config="configKonva" ref="stage">
            <v-layer>
                <v-shape @mousemove="handleMouseMove"
                         @mouseout="handleMouseOut"
                         :config="{
                      sceneFunc: function(context, shape) {
                          context.beginPath();
                          context.moveTo(20, 50);
                          context.lineTo(220, 80);
                          context.quadraticCurveTo(150, 100, 260, 170);
                          context.closePath();
                          // special Konva.js method
                          context.fillStrokeShape(shape);
                      },
                    fill: '#00D2FF',
                    stroke: 'black',
                    strokeWidth: 4
                  }"/>
            </v-layer>
        </v-stage>
    </div>
</template>

<script>
  const width = window.innerWidth;
  const height = window.innerHeight;
  export default {
    name: "RightStage",
    data() {
      return {
        configKonva: {
          width: 300,
          height: 300
        },
        configCircle: {
          x: 200,
          y: 100,
          radius: 70,
          fill: "red",
          stroke: "black",
          strokeWidth: 4
        },
        width: width,
        height: height
      }
    },
    methods: {
      writeMessage(message) {
        this.text = message;
      },
      // handleMouseOut(event) {
      handleMouseOut() {
        this.writeMessage('Mouseout triangle');
      },
      // handleMouseMove(event) {
      handleMouseMove() {
        const mousePos = this.$refs.stage.getNode().getPointerPosition();
        const x = mousePos.x - 190;
        const y = mousePos.y - 40;
        this.writeMessage('x: ' + x + ', y: ' + y);
      }
    }
  }
</script>

<style scoped lang="scss">
    .right_stage {
        width: calc(100vw - 363px);
        height: 100%;
        background-color: purple;
    }
    iframe {
        border: 1px solid black;
        width: 100%;
    }
</style>