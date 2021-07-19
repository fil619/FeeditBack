<template>
  <div>
    <FilterGuests :type="'Guests'" />
    <vxe-toolbar :zoom="true" export print custom  class="block sm:hidden"> </vxe-toolbar>
    <vxe-table
          border
          show-overflow
          ref="xTable2"
          :export-config="{}"
          :print-config="{}"
          height="500"
          row-id="id"
          size="medium"
          :loading="loading2"
          class="mytable-scrollbar  hidden sm:block"
          :header-cell-style="headerCellStyle"
          :row-style="rowCellStyle"
          :data="tableData2">
          <vxe-table-column sortable field="id" :title="$t('ID')" ></vxe-table-column>
          <vxe-table-column sortable field="first_name" :title="$t('First Name')" ></vxe-table-column>
          <vxe-table-column sortable field="last_name" :title="$t('Last Name')"></vxe-table-column>
          <vxe-table-column sortable field="email" :title="$t('E-mail')"></vxe-table-column>
          <vxe-table-column sortable field="gender" :title="$t('Gender')"></vxe-table-column>
          <vxe-table-column sortable field="visited" :title="$t('Visited')"></vxe-table-column>
        </vxe-table>

        
        
    <DataIterator :guests="tableData2"  class="block sm:hidden"/>

    <vxe-pager
      border
      size="medium"
      :loading="loading2"
      :current-page="tablePage2.currentPage"
      :page-size="tablePage2.pageSize"
      :total="tablePage2.totalResult"
      :layouts="[
        'PrevPage',
        'JumpNumber',
        'NextPage',
        'Sizes'
      ]"
      @page-change="handlePageChange2"
    >
    </vxe-pager>
  </div>
</template>

<script>
import FilterGuests from "./Filter.vue";
import DataIterator from "./DataIterator.vue";

export default {
  components: { FilterGuests, DataIterator },
  computed: {
    tableData() {
      return this.$store.state.guests;
    },
    isDark() {
      return this.$store.state.isDark;
    },
  },
  created() {
    this.findList2();
  },
    watch:{
        tableData () {
          this.findList2();
        }
    },
  data() {
    return {
      tableData2:[],
      loading2: false,
      tablePage2: {
        currentPage: 1,
        pageSize: 10,
        totalResult: 0,
      },
    };
  },
  methods: {
    findList2() {
      var list = this.tableData;
      this.loading2 = true;
      this.tablePage2.totalResult = list.length;
      this.tableData2 = list.slice(
        (this.tablePage2.currentPage - 1) * this.tablePage2.pageSize,
        this.tablePage2.currentPage * this.tablePage2.pageSize
      );
      this.loading2 = false;
    },
    handlePageChange2({ currentPage, pageSize }) {
      this.tablePage2.currentPage = currentPage;
      this.tablePage2.pageSize = pageSize;
      this.findList2();
    },
    headerCellStyle() {
      if (this.isDark) {
        return {
          backgroundColor: "#1f2937",
          color: "#ffffff",
        };
      } else {
        return {
          backgroundColor: "#BE185D",
          color: "#ffffff",
        };
      }
    },
    rowCellStyle() {
      if (this.isDark) {
        return {
          backgroundColor: "#4b5563",
          color: "#ffffff",
        };
      }
    },
  },
};
</script>


<style scoped>
.mytable-scrollbar ::-webkit-scrollbar {
  width: 10px;
  height: 10px;
}
/*滚动条的轨道*/
.mytable-scrollbar ::-webkit-scrollbar-track {
  background-color: #ffffff;
}
/*滚动条里面的小方块，能向上向下移动*/
.mytable-scrollbar ::-webkit-scrollbar-thumb {
  background-color: #bfbfbf;
  border-radius: 5px;
  border: 1px solid #f1f1f1;
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
}
.mytable-scrollbar ::-webkit-scrollbar-thumb:hover {
  background-color: #a8a8a8;
}
.mytable-scrollbar ::-webkit-scrollbar-thumb:active {
  background-color: #787878;
}
/*边角，即两个滚动条的交汇处*/
.mytable-scrollbar ::-webkit-scrollbar-corner {
  background-color: #ffffff;
}

.dark .vxe-table >>> .vxe-table--body-wrapper {
  background-color: #a8a8a8 !important;
  color: #fff;
}

.dark .vxe-toolbar {
  background-color: #a8a8a8 !important;
  color: #fff;
}

.dark .vxe-pager {
  background-color: #a8a8a8 !important;
  color: #fff;
}

.dark .vxe-table >>> .vxe-tools--operate {
  background-color: "#1f2937" !important;
  color: "#ffffff" !important;
}
</style>