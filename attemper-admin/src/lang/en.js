export default {
  route: {
    dashboard: 'Dashboard',
    sys: 'System',
    tenant: 'Tenant',
    user: 'User',
    tag: 'Tag',
    resource: 'Resource',
    job: 'Job',
    jobs: 'Job Design',
    introduction: 'Introduction',
    documentation: 'Documentation',
    guide: 'Guide',
    permission: 'Permission',
    pagePermission: 'Page Permission',
    rolePermission: 'Role Permission',
    directivePermission: 'Directive Permission',
    icons: 'Icons',
    components: 'Components',
    componentIndex: 'Introduction',
    markdown: 'Markdown',
    jsonEditor: 'JSON Editor',
    dndList: 'Dnd List',
    splitPane: 'SplitPane',
    avatarUpload: 'Avatar Upload',
    dropzone: 'Dropzone',
    sticky: 'Sticky',
    countTo: 'CountTo',
    componentMixin: 'Mixin',
    backToTop: 'BackToTop',
    dragDialog: 'Drag Dialog',
    dragSelect: 'Drag Select',
    dragKanban: 'Drag Kanban',
    charts: 'Charts',
    keyboardChart: 'Keyboard Chart',
    lineChart: 'Line Chart',
    mixChart: 'Mix Chart',
    example: 'Example',
    nested: 'Nested Routes',
    menu1: 'Menu 1',
    'menu1-1': 'Menu 1-1',
    'menu1-2': 'Menu 1-2',
    'menu1-2-1': 'Menu 1-2-1',
    'menu1-2-2': 'Menu 1-2-2',
    'menu1-3': 'Menu 1-3',
    menu2: 'Menu 2',
    Table: 'Table',
    dynamicTable: 'Dynamic Table',
    dragTable: 'Drag Table',
    inlineEditTable: 'Inline Edit',
    complexTable: 'Complex Table',
    treeTable: 'Tree Table',
    customTreeTable: 'Custom TreeTable',
    tab: 'Tab',
    form: 'Form',
    createArticle: 'Create Article',
    editArticle: 'Edit Article',
    articleList: 'Article List',
    errorPages: 'Error Pages',
    page401: '401',
    page404: '404',
    errorLog: 'Error Log',
    excel: 'Excel',
    exportExcel: 'Export Excel',
    selectExcel: 'Export Selected',
    mergeHeader: 'Merge Header',
    uploadExcel: 'Upload Excel',
    zip: 'Zip',
    pdf: 'PDF',
    exportZip: 'Export Zip',
    theme: 'Theme',
    clipboardDemo: 'Clipboard',
    i18n: 'I18n',
    externalLink: 'External Link'
  },
  actions: {
    handle: 'Handle',
    add: 'Add',
    update: 'Update',
    save: 'Save',
    search: 'Search',
    refresh: 'Refresh',
    remove: 'Remove',
    cancel: 'Cancel',
    reset: 'Reset',
    transferIn: 'Transfer In',
    transferOut: 'Transfer Out',
    import: 'Import',
    export: 'Export',
    last: 'Last',
    next: 'Next',
    ok: 'OK',
    download: 'Download'
  },
  tip: {
    search: 'please entry something to search',
    confirm: 'please confirm to do',
    remove: 'please select the data to remove',
    saveConfirm: 'are you sure to save it'
  },
  sys: {
    tenant: {
      columns: {
        id: 'ID',
        name: 'Name',
        admin: 'Administrator'
      },
      rules: {
        id: 'The Tenant ID can not be empty',
        name: 'The Tenant Name can not be empty'
      },
      placeholder: {
        id: 'Please entry Tenant ID',
        name: 'Please entry Tenant Name'
      }
    },
    tag: {
      columns: {
        tagName: 'Tag Name',
        displayName: 'Display Name',
        remark: 'Remark'
      },
      rules: {
        tagName: 'Tag Name can not be empty',
        displayName: 'Display Name can not be empty'
      },
      placeholder: {
        tagName: 'Please entry Tag Name',
        displayName: 'Please entry Display Name',
        remark: 'Please entry Remark'
      },
      tip: {
        user: 'Allocate User',
        resource: 'Allocate Resource',
        userFilterTip: 'User or Display Name'
      },
      actions: {
        user: 'User',
        resource: 'Resource'
      },
      label: {
        allocateUser: 'Allocate User',
        allocateResource: 'Allocate Resource'
      }
    },
    resource: {
      title: {
        left: 'Resource Tree',
        right: 'Detail'
      },
      label: {
        resourceName: 'Resource Name',
        displayName: 'Display Name',
        resourceType: 'Resource Type',
        uri: 'URI',
        icon: 'Icon',
        position: 'Position'
      },
      rules: {
        resourceName: 'Resource Name can not be empty',
        displayName: 'Display Name can not be empty'
      },
      placeholder: {
        resourceName: 'Please entry Resource Name',
        displayName: 'Please entry Display Name',
        uri: 'Please entry URI',
        icon: 'Please entry Icon'
      },
      tip: {
        searchKey: 'Resource/Display Name',
        resourceRemoveWarning: 'Please remove children first'
      }
    }
  },
  job: {
    title: 'Job',
    sort: {
      nameAsc: 'jobName Ascending',
      nameDesc: 'jobName Descending'
    },
    rules: {
      jobName: 'The Job Name can not be null',
      displayName: 'The Display Name can not be null',
      status: 'The Status can not be null'
    },
    columns: {
      reversion: 'Reversion',
      version: 'Version',
      jobName: 'Job Name',
      displayName: 'Display Name',
      status: 'Status',
      createTime: 'Created',
      updateTime: 'Last Updated',
      remark: 'Remark'
    },
    placeholder: {
      jobName: 'Please entry Job Name',
      displayName: 'Please entry Job Display Name',
      status: 'Please select Status',
      remark: 'Please entry Remark'
    },
    actions: {
      design: 'Design',
      param: 'Param',
      trigger: 'Trigger'
    },
    flow: {
      btn: {
        xml: 'XML',
        svg: 'SVG'
      },
      title: {
        xml: 'download as .xml(.bpmn) file',
        svg: 'download as .svg image'
      }
    },
    trigger: {
      tab: {
        time: {
          title: 'Time',
          cron: 'Cron Expression',
          calendarOffset: 'Calendar Offset',
          dailyInterval: 'Daily Interval',
          calendarInterval: 'Calendar Interval'
        },
        event: {
          title: 'Event'
        }
      },
      title: {
        preserveDayLight: 'Preserve Day Light',
        skipDayIfNoHour: 'Skip Day if no Hour',
        triggerName: 'Trigger Name',
        expression: 'Expression',
        timeZone: 'Time Zone',
        timeUnit: 'Time Unit',
        timeRange: 'Time Range',
        timeRangeOfDay: 'Time Range Of Day',
        // calendar: 'Calendar',
        interval: 'Interval',
        startTimeOfDay: 'Start Time Of Day',
        repeatCount: 'Repeat Count',
        daysOfWeek: 'Week Days',
        innerOffset: 'Inner Offset',
        outerOffset: 'Outer Offset',
        reversed: 'Reversed'
      },
      placeholder: {
        triggerName: 'Trigger Name',
        calendar: 'Calendar',
        timeUnit: 'Time Unit',
        startTime: 'Start Time',
        endTime: 'End Time',
        interval: 'Interval',
        startTimeOfDay: 'Start Time Of Day',
        endTimeOfDay: 'End Time Of Day',
        repeatCount: 'Repeat Count',
        daysOfWeek: 'Week Days',
        innerOffset: 'Inner Offset',
        outerOffset: 'Outer Offset'
      }
    }
  },
  navbar: {
    logOut: 'Log Out',
    dashboard: 'Dashboard',
    github: 'Github',
    theme: 'Theme',
    size: 'Global Size'
  },
  login: {
    title: 'Login Form',
    logIn: 'Log in',
    username: 'Username',
    password: 'Password',
    any: 'any',
    thirdparty: 'Or connect with',
    thirdpartyTips: 'Can not be simulated on local, so please combine you own business simulation! ! !'
  },
  documentation: {
    documentation: 'Documentation',
    github: 'Github Repository'
  },
  permission: {
    addRole: 'New Role',
    editPermission: 'Edit Permission',
    roles: 'Your roles',
    switchRoles: 'Switch roles',
    tips: 'In some cases it is not suitable to use v-permission, such as element Tab component or el-table-column and other asynchronous rendering dom cases which can only be achieved by manually setting the v-if.',
    delete: 'Delete',
    confirm: 'Confirm',
    cancel: 'Cancel'
  },
  guide: {
    description: 'The guide page is useful for some people who entered the project for the first time. You can briefly introduce the features of the project. Demo is based on ',
    button: 'Show Guide'
  },
  components: {
    documentation: 'Documentation',
    dropzoneTips: 'Because my business has special needs, and has to upload images to qiniu, so instead of a third party, I chose encapsulate it by myself. It is very simple, you can see the detail code in @/components/Dropzone.',
    stickyTips: 'when the page is scrolled to the preset position will be sticky on the top.',
    backToTopTips1: 'When the page is scrolled to the specified position, the Back to Top button appears in the lower right corner',
    backToTopTips2: 'You can customize the style of the button, show / hide, height of appearance, height of the return. If you need a text prompt, you can use element-ui el-tooltip elements externally',
    imageUploadTips: 'Since I was using only the vue@1 version, and it is not compatible with mockjs at the moment, I modified it myself, and if you are going to use it, it is better to use official version.'
  },
  table: {
    dynamicTips1: 'Fixed header, sorted by header order',
    dynamicTips2: 'Not fixed header, sorted by click order',
    dragTips1: 'The default order',
    dragTips2: 'The after dragging order',
    title: 'Title',
    importance: 'Imp',
    type: 'Type',
    remark: 'Remark',
    search: 'Search',
    add: 'Add',
    export: 'Export',
    reviewer: 'reviewer',
    id: 'ID',
    date: 'Date',
    author: 'Author',
    readings: 'Readings',
    status: 'Status',
    actions: 'Actions',
    edit: 'Edit',
    publish: 'Publish',
    draft: 'Draft',
    delete: 'Delete',
    cancel: 'Cancel',
    confirm: 'Confirm'
  },
  errorLog: {
    tips: 'Please click the bug icon in the upper right corner',
    description: 'Now the management system are basically the form of the spa, it enhances the user experience, but it also increases the possibility of page problems, a small negligence may lead to the entire page deadlock. Fortunately Vue provides a way to catch handling exceptions, where you can handle errors or report exceptions.',
    documentation: 'Document introduction'
  },
  excel: {
    export: 'Export',
    selectedExport: 'Export Selected Items',
    placeholder: 'Please enter the file name(default excel-list)'
  },
  zip: {
    export: 'Export',
    placeholder: 'Please enter the file name(default file)'
  },
  pdf: {
    tips: 'Here we use window.print() to implement the feature of downloading pdf.'
  },
  theme: {
    change: 'Change Theme',
    documentation: 'Theme documentation',
    tips: 'Tips: It is different from the theme-pick on the navbar is two different skinning methods, each with different application scenarios. Refer to the documentation for details.'
  },
  tagsView: {
    refresh: 'Refresh',
    close: 'Close',
    closeOthers: 'Close Others',
    closeAll: 'Close All'
  },
  settings: {
    title: 'Page style setting',
    theme: 'Theme Color',
    tagsView: 'Open Tags-View',
    fixedHeader: 'Fixed Header',
    sidebarLogo: 'Sidebar Logo'
  }
}
