<template>
  <div>
    <button @click="updateSummmary" type="button"
      class="m-8 focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">Refresh</button>

    <DashboardCardSummary />

    <div class="grid grid-cols-2 gap-4 m-8">
      <div
        class="flex items-center justify-center block p-6 bg-white border border-white-200 rounded-lg shadow-sm hover:bg-white-100 dark:bg-white-800 dark:border-white-700 dark:hover:bg-white-700">
        <DevExtreameCalender />
      </div>
      <div
        class="block p-6 bg-white border border-white-200 rounded-lg shadow-sm hover:bg-white-100 dark:bg-white-800 dark:border-white-700 dark:hover:bg-white-700">
        <DevExtreamePie />
      </div>
    </div>

    <div class="grid grid-cols-1 gap-4 m-8">
      <div
        class="flex items-center justify-center block p-6 bg-white border border-white-200 rounded-lg shadow-sm hover:bg-white-100 dark:bg-white-800 dark:border-white-700 dark:hover:bg-white-700">
        <DevExtreameTableCustomDataSource />
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
import '~/assets/css/custom.css'
import { useTestStore } from '../stores/test'

const store = useTestStore()
// call the action as a method of the store
// store.randomizeCounter()
function updateMessage() {
  const testMessage = 'random message!'
  store.updateMessage(testMessage)
}

import { useSummaryStore } from '~/stores/summary'

const summaryStore = useSummaryStore()
// call the action as a method of the store
// store.randomizeCounter()
function updateSummmary() {
  const summaryMessage = 'Changed message!'
  summaryStore.updateSummary()
}
</script>

<style scoped></style>
