<template>
    <div class="submit-form">
      <div v-if="!submitted">
        <div class="form-group">
          <label for="domain">Domínio</label>
          <input
            type="text"
            class="form-control"
            id="domain"
            required
            v-model="domain.domain"
            name="domain"
          />
        </div>
  
        <div class="form-group">
          <label for="tld">Tld</label>
          <input
            class="form-control"
            id="tld"
            required
            v-model="domain.tld"
            name="tld"
          />
        </div>
  
        <button @click="saveDomain" class="btn btn-success">salvar</button>
      </div>
  
      <div v-else>
        <h4>Domínio salvo com sucesso</h4>
        <button class="btn btn-success" @click="newDomain">Novo</button>
      </div>
    </div>
  </template>
  
  <script>
  import DataService from "../services/DataService";
  
  export default {
    name: "home-crud",
    data() {
      return {
        domain: {
          id: null,
          domain: "",
          tld: "",
          published: false
        },
        submitted: false
      };
    },
    methods: {
      saveDomain() {
        this.$isLoading(true);
        var data = {
          name: this.domain.domain,
          tld: this.domain.tld
        };
  
        DataService.create(data)
          .then(response => {
            this.domain.id = response.data.id;
            console.log(response.data);
            this.submitted = true;
            this.$isLoading(false);
          })
          .catch(e => {
            console.log(e);
          });
      },
      
      newDomain() {
        this.submitted = false;
        this.domain = {};
      }
    }
  };
  </script>
  
  <style>
  .submit-form {
    max-width: 300px;
    margin: auto;
  }
  </style>