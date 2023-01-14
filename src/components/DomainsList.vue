<template>
    <div class="list row">
      <div class="col-md-8">
      </div>
      <div class="col-md-6">
        <h4>Lista de domínios</h4>
        <ul class="list-group">
          <li class="list-group-item"
            :class="{ active: index == currentIndex }"
            v-for="(domain, index) in domains"
            :key="index"
            @click="setActiveDomain(domain, index)"
          >
            {{ domain.name.charAt(0).toUpperCase() + domain.name.slice(1) }}
          </li>
        </ul>
      </div>
      <div class="col-md-6">
        <div v-if="currentDomain">
          <h4>Domínio</h4>
          <div>
            <label><strong>Nome:</strong></label> {{ currentDomain.name }}
          </div>
          <div>
            <label><strong>Tld:</strong></label> {{ currentDomain.tld }}
          </div>
          <div>
            <label><strong>Data de expiração:</strong></label> {{ currentDomain.expiration_date }}
          </div>
  
          <router-link :to="'/domain/' + currentDomain.id" class="badge badge-warning">Edit</router-link>
        </div>
        <div v-else>
          <br />
          <p>Clique num domínio...</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import DataService from "../services/DataService";
  
  export default {
    name: "domains-list",
    data() {
      return {
        domains: [],
        currentDomain: null,
        currentIndex: -1,
        title: ""
      };
    },
    methods: {
      retrieveDomains() {
        this.$isLoading(true);
        DataService.getAll()
          .then(response => {
            this.domains = response.data;
            console.log(response.data);
            this.$isLoading(false);
          })
          .catch(e => {
            console.log(e);
            this.$isLoading(false);
          });
      },
  
      refreshList() {
        this.retrieveDomains();
        this.currentDomain = null;
        this.currentIndex = -1;
      },
  
      setActiveDomain(domain, index) {
        var dateFormat = new Date(domain.expiration_date);
        domain.expiration_date = dateFormat.toLocaleDateString();
        this.currentDomain = domain;
        this.currentIndex = domain ? index : -1;
      },
      
    },
    mounted() {
      this.retrieveDomains();
    }
  };
  </script>
  
  <style>
  .list {
    text-align: left;
    max-width: 750px;
    margin: auto;
  }
  </style>