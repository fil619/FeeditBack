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
        toast:{
          notices:[],
          visible:[]
        },
    },
    mutations: {
        getGuests(state , data) {
            var ndata = data.data
              var hasItemsProperty = {}.hasOwnProperty.call(ndata, "items");
            if (hasItemsProperty) {
                this.commit('AddToast' , { type: 'success', text: 'SUCCESS' })
                state.guests = ndata.items
            }
        },
        getGuestOrders(state , data) {
            var ndata = data.data
              var hasItemsProperty = {}.hasOwnProperty.call(ndata, "items");
            if (hasItemsProperty) {
              this.commit('AddToast' , { type: 'success', text: 'SUCCESS' })
                state.orders = ndata.items
            }
            
        },
        GetDashboardGuests(state , data) {
          var ndata = data.data
            var hasItemsProperty = {}.hasOwnProperty.call(ndata, "items");
          if (hasItemsProperty) {
              state.dashboardguests = ndata.items
              var ids =   state.dashboardguests.map(item => item.id).filter((value, index, self) => self.indexOf(value) === index)
              if (state.dashboardguests.length == 0) {
                this.commit('AddToast' , { type: 'warning', text: 'NO DATA AVAILABLE' })
              } else {
                this.commit('AddToast' , { type: 'success', text: 'SUCCESS' })
              }
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
          var self = this
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
                console.log('error = ',error);
                self.commit('AddToast' , { type: 'danger', text: error })
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
              this.commit('AddToast' , { type: 'danger', text: error })
            });
        },
        ToggleDark(state) {
          state.isDark = !state.isDark
        },
        AddToast(state,data){
          data.id = Date.now();
          state.toast.notices.push(data);
          this.commit('FireToast',data.id)
        },
        FireToast(state,data){
          state.toast.visible.push(state.toast.notices.find((notice) => notice.id == data));
          const timeShown = 2000 * state.toast.visible.length;
          setTimeout(() => {
            this.commit('RemoveToast',data)
          }, timeShown);
        },
        RemoveToast(state,data){
          const notice = state.toast.visible.find((notice) => notice.id == data);
          const index = state.toast.visible.indexOf(notice);
          state.toast.visible.splice(index, 1);
        }
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