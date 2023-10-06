// 1. Make sure to import 'vue' before declaring augmented types
import Vue from 'vue'
import { Telegram } from "@twa-dev/types"

//    Vue has the constructor type in types/vue.d.ts
declare module 'vue/types/vue' {
  // 3. Declare augmentation for Vue
  interface Vue {
    $network: string
  }
}

declare global {
  interface Window {
    Telegram: Telegram;
  }
}
