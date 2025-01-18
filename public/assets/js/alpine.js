document.addEventListener('alpine:init', () => {
    Alpine.data('categoryParentList', () => ({
        categoryLists: [],
        init(){
            this.getCategoryList();
        },
        getCategoryList() {
            let para = {parent_id:0};
            axiosGet(`/api/service/v1/categories`, para, function (res) {
                this.categoryLists = res?.data;
            }.bind(this));
        },
    }));

    Alpine.data('categoryConsultantList', () => ({
        categoryLists: [],
        init(){
            this.getCategoryList();
        },
        getCategoryList() {
            let para = {parent_id:0,type:'consultant',_t:this._t,_token:this.csrf_token};
            axiosGet(`/api/service/v1/categories`, para, function (res) {
                this.categoryLists = res?.data;
            }.bind(this));
        },
    }));

    Alpine.data('educationLevelsList', () => ({
        educationLevels: [],
        init(){
            this.getCategoryList();
        },
        getCategoryList() {
            let para = {_t:this._t,_token:this.csrf_token};
            axiosGet(`/api/service/v1/education-levels`, para, function (res) {
                this.educationLevels = res?.data;
            }.bind(this));
        },
    }));


    Alpine.data('countryList', () => ({
        countryList: [],
        getCountryList() {
            axiosGet(`/api/service/v1/countries`, null, function (res) {
                this.countryList = res?.data;
            }.bind(this));
        },
    }));

    Alpine.data('countryStateList', () => ({
        countryList: [],
        stateList: [],
        country_id_selected: null,
        state_id_selected: null,
        getCountryList() {
            axiosGet(`/api/service/v1/countries`, null, function (res) {
                this.countryList = res?.data;
            }.bind(this));
        },
        getStateList() {
            let parameters = {country_id: this.country_id_selected}
            axiosGet(`/api/service/v1/states`, parameters, function (res) {
                this.stateList = res?.data;
            }.bind(this));
        },
        changeCountry(country_id) {
            this.country_id_selected = country_id;
            this.getStateList();
        }
    }));

    Alpine.data('countryStateCityList', () => ({
        countryList: [],
        stateList: [],
        cityList: [],
        country_id_selected: null,
        state_id_selected: null,
        getCountryList() {
            axiosGet(`/api/service/v1/countries`, null, function (res) {
                this.countryList = res?.data;
            }.bind(this));
        },
        getStateList() {
            let parameters = {country_id: this.country_id_selected}
            axiosGet(`/api/service/v1/states`, parameters, function (res) {
                this.stateList = res?.data;
            }.bind(this));
        },
        getCityList() {
            let parameters = {state_id:this.state_id_selected}
            axiosGet(`/api/service/v1/cities`, parameters, function (res) {
                this.cityList = res?.data;
            }.bind(this));
        },
        changeCountry(country_id) {
            this.country_id_selected = country_id;
            this.getStateList();
        },
        changeState(state_id) {
            this.state_id_selected = state_id;
            this.getCityList();
        }
    }));

    Alpine.data("showSubMenu", () => ({
        is_open: false
    }));



});
