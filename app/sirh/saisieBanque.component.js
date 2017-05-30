import template from './saisieBanque.component.html';

const API_URL = 'http://localhost:8080/sgp/api/collaborateurs';

class controller {
    constructor($http, $q) {
        this.$http = $http;
        this.$q = $q;
        this.collaborateurs = [];
        this.departements = [];
    }

    $onInit() {
        this.getCollabs();
        this.getDepartements();
    }

    getCollabs() {
        return this.$http.get(API_URL)
            .then(collaborateur => this.collaborateurs = collaborateur);
    }

    getDepartements() {
        return this.$http.get(API_URL)
            .then(departement => this.departements = departement);
    }
}

export let saisieBanqueComponent = {
    template,
    controller,
    bindings: {

        collaborateurs: "<",
        departements: "<"
    }
};
