<template>
  <div>
    <el-row>
        <el-col :span="6" style="float:left; margin-left: 45vw;width: 270px; hight: 40px; margin-top: 20px;">
            <el-input
              type="text"
              prefix-icon="el-icon-search"
              v-model="kb_content"
              placeholder="请输入"
              @keyup.enter.native="getAllKb"
            ></el-input>
          </el-col>
  </el-row>
  <el-row>
    <div style="float: right;margin-right: 20px;">
      <el-button type="primary" icon="el-icon-edit"></el-button>
      <el-button type="primary" icon="el-icon-share"></el-button>
      <el-button type="primary" icon="el-icon-delete"></el-button>
      <el-button type="primary">上传<i class="el-icon-upload el-icon--right"></i></el-button>
    </div>
    <el-table
      ref="filterTable"
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="date"
        label="创建日期"
        sortable
        column-key="date"
        :filters="[]"
        :filter-method="filterHandler"
      >
      </el-table-column>code
      <el-table-column
        prop="code"
        label="代码块"
      >
        <template slot-scope="scope">
                            <div v-html="scope.row.code"></div>
                        </template>
      </el-table-column>
      <el-table-column
        prop="description"
        label="描述"
        :formatter="formatter">
      </el-table-column>
      <el-table-column
        prop="tag"
        label="标签"
        :filters="[{ text: 'Java', value: 'Java' }]"
        :filter-method="filterTag"
        filter-placement="bottom-end">
        <template slot-scope="scope">
          <el-tag
            :type="scope.row.tag === 'Java' ? 'primary' : 'success'"
            disable-transitions>{{scope.row.tag}}</el-tag>
        </template>
      </el-table-column>
    </el-table>
  </el-row>
  <el-row style="margin-top: 10px;">
      <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage4"
      :page-sizes="[100, 200, 300, 400]"
      :page-size="100"
      layout="total, sizes, prev, pager, next, jumper"
      :total="400"
       style="text-align: center;"
      >
    </el-pagination>
  </el-row>
  <el-row>
    <highlight-code lang="javascript">
            let str = 'Hello, World!';
            console.log(str);
        </highlight-code>
  </el-row>
  </div>
</template>

<script>
export default {
  name: 'Search',
  components: {},
  data() {
    return {
        code: "console.log()",
       tableData: [{
          date: '2016-05-02',
          code: '<h2>大写的</h2>',
          description: '<highlightjs language="html" autodetect code="var x = 5;" />',
          tag: 'Java'
        },
        {
          date: '2016-05-02',
          code: '<highlightjs language="html" autodetect code="var x = 5;" />',
          description: '当前路径',
          tag: 'Bash'
        },
        {
          date: '2016-05-02',
          code: 'ls -lh',
          description: '当前路径',
          tag: 'Java'
        },
        ],
    }
  },
  methods: {
    resetDateFilter() {
        this.$refs.filterTable.clearFilter('date');
      },
      clearFilter() {
        this.$refs.filterTable.clearFilter();
      },
      formatter(row, column) {
        return row.description;
      },
      filterTag(value, row) {
        return row.tag === value;
      },
      filterHandler(value, row, column) {
        const property = column['property'];
        return row[property] === value;
      }
  },
}
</script>

<style scoped>

</style>
