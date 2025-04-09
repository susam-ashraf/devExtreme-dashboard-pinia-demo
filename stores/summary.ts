import { defineStore } from 'pinia';

interface SummaryState {
  member: number;
  post: number;
  comment: number;
  serverLoad: number;
}

export const useSummaryStore = defineStore<'summary', SummaryState, {}, { updateSummary:any }>('summary', {
  state: (): SummaryState => ({
    member: 500,
    post: 20,
    comment: 20,
    serverLoad: 20,
  }),
  actions: {
    updateSummary(newMessage: number) {
      this.member = Math.round(100 * Math.random());
      this.post = Math.round(100 * Math.random());
      this.serverLoad = Math.round(100 * Math.random());
    },
  },
});
