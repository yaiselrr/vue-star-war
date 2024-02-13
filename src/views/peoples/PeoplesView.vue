<template>
  <div class="home">
    <Spinner class="text-center mt-5 mb-5" v-if="isLoading" />
    <div class="row" v-if="!isLoading">
      <Table :peoples="peoples" />
    </div>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { computed, onMounted } from "vue";
import Table from "@/components/peoples/Table.vue";
import Spinner from "@/components/utils/Spinner.vue";
export default {
  name: 'PeoplesView',
  components: {
    Table,
    Spinner
  },
  setup() {
    const store = useStore();

    onMounted(() => {
      store.dispatch("fetchData");
      isLoading = false;
    });

    const peoples = computed(() => store.state.peoples);
    let isLoading = computed(() => store.state.isLoading);

    return { peoples, isLoading };
  },
}
</script>
