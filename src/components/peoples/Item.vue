<template>
  <tr>
    <td>{{ people.name }}</td>
    <td>{{ people.height }}</td>
    <td>{{ people.mass }}</td>
    <td>{{ people.hair_color }}</td>
    <td>{{ people.skin_color }}</td>
    <td>{{ people.eye_color }}</td>
    <td>{{ people.birth_year }}</td>
    <td>{{ people.gender }}</td>
    <td>
      <Button msg="Ver" @click="seePeople(people)" />
    </td>
  </tr>
</template>

<script>
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import Button from "@/components/utils/Button.vue";
export default {
  name: "Item",
  components: {
    Button,
  },
  props: ["people"],
  setup() {
    const store = useStore();
    const router = useRouter();
    const seePeople = (people) => {
      store.dispatch("getDataPeople", people.url);
      store.dispatch("goRoute", people.url);
      router.push({ path: "personaje/" + store.state.idPeople });
    };

    return { seePeople };
  },
};
</script>

<style lang="scss" scoped></style>
