<template>
  <div>
    <Spinner class="text-center mt-5 mb-5" v-if="isLoading" />
    <div class="col-12" v-if="!isLoading">
      <div class="card">
        <div class="card-body">
          <div class="row">
            <div class="col-lg-4 mb-4">
              <div class="text-center"></div>
              <ul class="list-group">
                <a
                  href="#"
                  class="list-group-item list-group-item-action active"
                  aria-current="true"
                >
                  Films
                </a>
                <li
                  class="list-group-item d-flex justify-content-between align-items-center"
                  v-for="(film, index) of people.films"
                  :key="index"
                >
                {{ film }}
                  <span class="badge bg-primary rounded-pill">{{index + 1}}</span>
                </li>
              </ul>
            </div>
            <div class="col-lg-8 pl-lg-5">
              <div class="d-flex justify-content-between">
                <div>
                  <Title msg="Información del personaje" />
                </div>
              </div>
              <div class="row">
                <div class="mt-4 py-2 border-bottom col-md-5">
                  <ul class="nav profile-navbar">
                    <li class="nav-item">
                      <a class="nav-link text-dark" href="#">
                        <i class="fa fa-paragraph"></i>
                        <strong>Nombre: </strong>{{ people.name }}
                      </a>
                    </li>
                  </ul>
                </div>
                <div class="mt-4 py-2 col-md-2"></div>
                <div class="mt-4 py-2 border-bottom col-md-5">
                  <ul class="nav profile-navbar">
                    <li class="nav-item">
                      <a class="nav-link text-dark" href="#">
                        <i class="fa fa-mobile"></i>
                        <strong>Estatura: </strong>{{ people.height }}
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="row">
                <div class="mt-4 py-2 border-bottom col-md-5">
                  <ul class="nav profile-navbar">
                    <li class="nav-item">
                      <a class="nav-link text-dark" href="#">
                        <i class="fa far fa-id-card"></i>
                        <strong>Masa: </strong>{{ people.mass }}
                      </a>
                    </li>
                  </ul>
                </div>
                <div class="mt-4 py-2 col-md-2"></div>
                <div class="mt-4 py-2 border-bottom col-md-5">
                  <ul class="nav profile-navbar">
                    <li class="nav-item">
                      <a class="nav-link text-dark" href="#">
                        <i class="fa fa-envelope"></i>
                        <strong>Color de pelo: </strong>{{ people.hair_color }}
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="row">
                <div class="mt-4 py-2 border-bottom col-md-5">
                  <ul class="nav profile-navbar">
                    <li class="nav-item">
                      <a class="nav-link text-dark" href="#">
                        <i class="fa fa-address-book"></i>
                        <strong>Color de piel: </strong>{{ people.skin_color }}
                      </a>
                    </li>
                  </ul>
                </div>
                <div class="mt-4 py-2 col-md-2"></div>
                <div class="mt-4 py-2 border-bottom col-md-5">
                  <ul class="nav profile-navbar">
                    <li class="nav-item">
                      <a class="nav-link text-dark" href="#">
                        <i class="fa fa-address-book"></i>
                        <strong>Color de ojos: </strong>{{ people.eye_color }}
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="row">
                <div class="mt-4 py-2 border-bottom col-md-5">
                  <ul class="nav profile-navbar">
                    <li class="nav-item">
                      <a class="nav-link text-dark" href="#">
                        <i class="fa fa-address-book"></i>
                        <strong>Año de nacimiento: </strong
                        >{{ people.birth_year }}
                      </a>
                    </li>
                  </ul>
                </div>
                <div class="mt-4 py-2 col-md-2"></div>
                <div class="mt-4 py-2 border-bottom col-md-5">
                  <ul class="nav profile-navbar">
                    <li class="nav-item">
                      <a class="nav-link text-dark" href="#">
                        <i class="fa fa-address-book"></i>
                        <strong>Género: </strong>{{ people.gender }}
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="card-footer text-muted">
          <a href="#" class="btn btn-primary float-right" @click="goBack()"
            >Regresar</a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { computed } from "vue";
import { useRouter } from "vue-router";
import Title from "@/components/utils/Title.vue";
import Spinner from "@/components/utils/Spinner.vue";
export default {
  components: { Title, Spinner },
  name: "People",
  setup() {
    const store = useStore();
    const people = computed(() => store.state.people);
    let isLoading = computed(() => store.state.isLoading);
    const router = useRouter();
    const goBack = () => {
      router.push({ path: "/" });
    };

    return { people, goBack, isLoading };
  },
};
</script>
