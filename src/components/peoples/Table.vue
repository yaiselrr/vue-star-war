<template>
  <div class="mt-5 my-5">
    <Title class="text-center" msg="Listado de personajes" />
    <table class="table table-hover mt-5">
      <thead>
        <tr>
          <th scope="col">Nombre</th>
          <th scope="col">Estatura</th>
          <th scope="col">Masa</th>
          <th scope="col">Color de pelo</th>
          <th scope="col">Color de piel</th>
          <th scope="col">Color de ojos</th>
          <th scope="col">Año de nacimiento</th>
          <th scope="col">Género</th>
          <th scope="col">Acción</th>
        </tr>
      </thead>
      <tbody id="items">
        <Item
          v-for="(people, index) in peoples"
          :key="people.mass"
          :people="people"
          :index="index"
        />
      </tbody>
      <tfoot>
        <tr id="footer-carrito">
          <th scope="row" colspan="5" class="text-center" v-if="peoples.length === 0">
            Listado vacio
          </th>
        </tr>
      </tfoot>
    </table>

    <nav aria-label="...">
      <ul class="pagination">
        <li class="page-item active" aria-current="page">
          <span class="page-link" @click="fetchDataParams(1)">1</span>
        </li>
        <li class="page-item" aria-current="page" v-for="(page, index) in Number.parseInt(count / 10)" :key="index">
          <span class="page-link" v-if="page !== 1" @click="fetchDataParams(page + 1)">{{ page }}</span>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import Item from "@/components/peoples/Item.vue";
import Title from "@/components/utils/Title.vue";
import { useStore } from "vuex";
import { computed } from "vue";
export default {
  name: "Table",
  components: {
    Item, Title
  },
  props: ["peoples"],
  setup() {
    const store = useStore();
    const count = computed(() => store.state.count);
    const next = computed(() => store.state.next);
    const previous = computed(() => store.state.previous);

    let isLoading = computed(() => store.state.isLoading);

    const fetchDataParams = (id) => {
      store.dispatch("fetchDataParams", id);
      isLoading = false;
    };

    return {
      count,
      next,
      previous,
      isLoading,
      fetchDataParams,
    };
  },
};
</script>
