import { Plugin } from 'vue'
import EchoEditor from '@/components/EchoEditor.vue'
import ActionButton from '@/components/ActionButton.vue'
import locale, { zhHans, en } from './locales'
import { setupIcons } from '@/components/icons/setupIcon'

setupIcons()

const EchoEditorPlugin: Plugin = {
  install(app) {
    app.component('echo-editor', EchoEditor)
  },
}
export { en, locale, zhHans }
export * from '@/extensions'
export { useEditor } from '@tiptap/vue-3'
export type * from '@/type'
export { type Editor as EditorInstance } from '@tiptap/core'
export { EchoEditorPlugin, EchoEditor, ActionButton }

export default EchoEditorPlugin
