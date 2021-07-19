import Vue from "vue";
import Vuex from "vuex";
const axios = require('axios').default;
Vue.use(Vuex);


export default new Vuex.Store({
    state: {
        StConnector:{
            'mURL': 'https://tst-api.feeditback.com',
            'getGuests': {
                type: 'get',
                URL: '/exam.guests',
                Form: {},
                content: 'application/json'
            },
            'getGuestOrders': {
                type: 'get',
                URL: '/exam.guests.orders',
                Form: {},
                content: 'application/json'
                },
                'GetDashboardOrders': {
                  type: 'get',
                  URL: '/exam.guests.orders',
                  Form: {},
                  content: 'application/json'
                  },
                  'GetDashboardGuests': {
                    type: 'get',
                    URL: '/exam.guests',
                    Form: {},
                    content: 'application/json'
                    },
        },
        guests : [],
        orders : [],
        dashboardorders : [],
        dashboardguests : [],
        Page:'Dashboard',
        isDark:true,
    },
    mutations: {
        getGuests(state , data) {
            var ndata = data.data
              var hasItemsProperty = {}.hasOwnProperty.call(ndata, "items");
            if (hasItemsProperty) {
                state.guests = ndata.items
            }
        },
        getGuestOrders(state , data) {
            var ndata = data.data
              var hasItemsProperty = {}.hasOwnProperty.call(ndata, "items");
            if (hasItemsProperty) {
                state.orders = ndata.items
            }
        },
        GetDashboardGuests(state , data) {
          var ndata = data.data
            var hasItemsProperty = {}.hasOwnProperty.call(ndata, "items");
          if (hasItemsProperty) {
              state.dashboardguests = ndata.items
              var ids =   state.dashboardguests.map(item => item.id).filter((value, index, self) => self.indexOf(value) === index)
              state.dashboardorders = []
              ids.forEach(element => {
                var val = {
                    action : 'GetDashboardOrders',
                    vals : {params : {
                      guest_id : element
                    }
                 }
                }
              
                this.commit('STGetConnector' , val)
              });

          }
      },
        GetDashboardOrders(state , data) {
          var ndata = data.data
            var hasItemsProperty = {}.hasOwnProperty.call(ndata, "items");
          if (hasItemsProperty) {
              state.dashboardorders = ndata.items
          }
      },
        ChangePage(state , data){
          state.Page = data
        },
        STPostConnector(state, vals) {
            axios({
              method: state.StConnector[vals.action].type,
              url: state.StConnector.mURL + state.StConnector[vals.action].URL,
              data: state.StConnector[vals.action].Form,
              headers: {
                "X-FIB-API-LANGUAGE": "en_GB",
                "X-FIB-API-AUTH-TYPE": "exam",
                "X-FIB-API-AUTH-TOKEN": 'F6HCAFVHPEg3"Sw#',
              },
            })
              .then(data => {
                data["extra"] = vals;
                this.commit(vals.action, data);
              })
              .catch(error => {
                  console.log(error);
              });
          },
          STGetConnector(state, vals) {
            var obj = vals.vals.params
            var str = "";
            for (var key in obj) {
              if (obj[key] != '') {
                if (str != "") {
                    str += "&";
                }
                  str += key + "=" + encodeURIComponent(obj[key]);
              }
            }
            axios({
              method: 'get',
              url: state.StConnector.mURL + state.StConnector[vals.action].URL + '?' + str,
              headers: {
                "X-FIB-API-LANGUAGE": "en_GB",
                "X-FIB-API-AUTH-TYPE": "exam",
                "X-FIB-API-AUTH-TOKEN": 'F6HCAFVHPEg3"Sw#',
              },
            })
              .then(data => {
                data["extra"] = vals;
                this.commit(vals.action, data);
              })
              .catch(error => {
                  console.log(error);
              });
          },
          ToggleDark(state) {
            state.isDark = !state.isDark
          },
  
    },
    actions: {
        Action_STConnectorPost (context , data) {
          context.commit('STPostConnector' , data)
        },
        Action_STConnectorGet (context , data) {
          context.commit('STGetConnector' , data)
        },
        ChangePageHandler (context , data) {
          context.commit('ChangePage' , data)
        },
      }
})