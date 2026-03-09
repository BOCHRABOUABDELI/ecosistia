import { Node } from '@tiptap/core'
import { ReactNodeViewRenderer } from '@tiptap/react'

export interface VideoNodeOptions {
  allowFullscreen: boolean
  HTMLAttributes: Record<string, any>
}

export const VideoNode = Node.create<VideoNodeOptions>({
  name: 'video',
  group: 'block',
  selectable: true,
  draggable: true,
  atom: true,

  addOptions() {
    return {
      allowFullscreen: true,
      HTMLAttributes: {},
    }
  },

  addAttributes() {
    return {
      src: {
        default: null,
      },
      controls: {
        default: true,
      },
      autoplay: {
        default: false,
      },
      muted: {
        default: true,
      },
      loop: {
        default: false,
      },
      width: {
        default: null,
      },
      height: {
        default: null,
      },
    }
  },

  parseHTML() {
    return [
      {
        tag: 'video',
      },
    ]
  },

  renderHTML({ HTMLAttributes }) {
    return ['video', { ...HTMLAttributes, class: 'w-full rounded-lg my-6' }]
  },

  addCommands() {
    return {
      setVideo:
        (options: { src: string; controls?: boolean; autoplay?: boolean; muted?: boolean; loop?: boolean }) =>
        ({ commands }) => {
          return commands.insertContent({
            type: this.name,
            attrs: {
              src: options.src,
              controls: options.controls ?? true,
              autoplay: options.autoplay ?? false,
              muted: options.muted ?? true,
              loop: options.loop ?? false,
            },
          })
        },
    }
  },
})
