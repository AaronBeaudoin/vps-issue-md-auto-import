import { createSSRApp, h } from "vue";

export async function render(pageContext) {
  const page = createSSRApp({ render: _ => h(pageContext.Page, {}) });
  page.mount("#page");
}
