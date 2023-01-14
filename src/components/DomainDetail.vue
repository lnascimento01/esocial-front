<template>
    <div v-if="currentDomain" class="edit-form">
      <h4>Domain</h4>
      <form>
        <div class="form-group">
          <label for="domain">Domain</label>
          <input type="text" class="form-control" id="domain"
            v-model="currentDomain.name"
          />
        </div>
        <div class="form-group">
          <label for="tld">Tld</label>
          <input type="text" class="form-control" id="tld"
            v-model="currentDomain.tld"
          />
        </div>
  
        <div class="form-group">
          <label><strong>Data de expiração:</strong></label>
          {{ currentDomain.expiration_date}}
        </div>
      </form>
  
      <button type="submit" class="badge badge-success mr-2"
        @click="updateDomain"
      >
        Update
      </button>
  
      <button class="badge badge-danger"
        @click="deleteDomain"
      >
        Delete
      </button>
      <p>{{ message }}</p>
    </div>
  </template>
  
  <script>
  import DataService from "../services/DataService";
  
  export default {
    name: "domain",
    data() {
      return {
        currentDomain: null,
        message: ''
      };
    },
    methods: {
      getDomain(id) {
        this.$isLoading(true);
        DataService.get(id)
          .then(response => {
            var dateFormat = new Date(response.data.expiration_date);
            response.data.expiration_date = dateFormat.toLocaleDateString();
            this.currentDomain = response.data;
            console.log(response.data);
            this.$isLoading(false);
          })
          .catch(e => {
            console.log(e); 
            this.$isLoading(false);
          });
      },
  
      updateDomain() {
        let data = {
          "id": this.currentDomain.id,
          "name": this.currentDomain.name,
          "tld": this.currentDomain.tld
        }
        DataService.update(data)
          .then(response => {
            console.log(response.data);
            this.message = response.data.message;
            console.log(this.currentDomain);
          })
          .catch(e => {
            console.log(e);
          });
      },
  
      deleteDomain() {
        DataService.delete(this.currentDomain.id)
          .then(response => {
            console.log(response.data);
            this.$router.push({ name: "domains" });
          })
          .catch(e => {
            console.log(e);
          });
      }
    },
    mounted() {
      this.message = '';
      this.getDomain(this.$route.params.id);
    }
  };
  </script>
  
  <style>
  .edit-form {
    max-width: 300px;
    margin: auto;
  }
  </style>