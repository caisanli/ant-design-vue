import { defineComponent, inject } from 'vue';
import { GLOBAL_CONFIG } from '../SymbolKey';

export default defineComponent({
  props: {
    cols: {
      type: [Number, String],
      default: 2,
    },
  },
  setup() {
    return {
      globalConfig: inject(GLOBAL_CONFIG),
    };
  },
  render() {
    const { cols, globalConfig, $slots } = this;
    // 手机访问强制开启单行 demo 模式
    const isSingleCol = cols === 1 || globalConfig.isMobile.value;
    const leftChildren = [];
    const rightChildren = [];
    const children = $slots.default?.() || [];
    children.forEach((demo, index) => {
      if (index % 2 === 0 || isSingleCol) {
        leftChildren.push(demo);
      } else {
        rightChildren.push(demo);
      }
    });
    return (
      <z-row gutter={16}>
        <z-col
          span={isSingleCol ? 24 : 12}
          class={isSingleCol ? 'code-boxes-col-1-1' : 'code-boxes-col-2-1'}
        >
          {leftChildren}
        </z-col>
        {isSingleCol ? null : (
          <z-col class="code-boxes-col-2-1" span={12}>
            {rightChildren}
          </z-col>
        )}
      </z-row>
    );
  },
});
