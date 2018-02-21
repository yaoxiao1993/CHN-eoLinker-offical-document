(function() {
	window.eocourse = window.eocourse || {};
	window.eocourse.sidebarConstant = {
		id: 'sidebar_js',
		list: [{
			title: '欢迎使用',
			href: '/md/index',
			icon: 'index'
		}, {
			title: '接口管理-基础教程',
			icon: '接口管理',
			childList: [{
				title: '简介',
				href: '/md/接口管理/简介'
			}, {
				title: '快速入门',
				childList: [{
					title: '创建项目',
					href: '/md/接口管理/项目管理/创建项目',
					originHref: '/md/接口管理/快速入门/创建项目'
				}, {
					title: '创建接口',
					href: '/md/接口管理/API文档管理/创建接口',
					originHref: '/md/接口管理/快速入门/创建接口'
				}, {
					title: '基础测试',
					href: '/md/接口管理/API基础测试/基础测试',
					originHref: '/md/接口管理/快速入门/基础测试'
				}, {
					title: '添加团队成员',
					href: '/md/接口管理/项目管理/添加团队成员',
					originHref: '/md/接口管理/快速入门/添加团队成员'
				}, {
					title: '在线分享项目',
					href: '/md/接口管理/项目管理/在线分享项目',
					originHref: '/md/接口管理/快速入门/在线分享项目'
				}]
			}, {
				title: '项目管理',
				childList: [{
					title: '创建项目',
					href: '/md/接口管理/项目管理/创建项目'
				}, {
					title: '修改/删除项目',
					href: '/md/接口管理/项目管理/修改删除项目'
				}, {
					title: '项目概况',
					href: '/md/接口管理/项目管理/项目概况'
				}, {
					title: '添加团队成员',
					href: '/md/接口管理/项目管理/添加团队成员'
				}, {
					title: '在线分享项目',
					href: '/md/接口管理/项目管理/在线分享项目'
				}, {
					title: '查看项目操作历史',
					href: '/md/接口管理/项目管理/查看项目操作历史'
				}, {
					title: '转让项目所有权',
					href: '/md/接口管理/项目管理/转让项目所有权'
				}]
			}, {
				title: 'API文档管理',
				childList: [{
					title: '创建分组',
					href: '/md/接口管理/API文档管理/创建分组'
				}, {
					title: '修改/删除分组',
					href: '/md/接口管理/API文档管理/修改删除分组'
				}, {
					title: '创建接口',
					href: '/md/接口管理/API文档管理/创建接口'
				}, {
					title: '修改接口',
					href: '/md/接口管理/API文档管理/修改接口'
				}, {
					title: '删除接口',
					href: '/md/接口管理/API文档管理/删除接口'
				}, {
					title: '接口回收站（恢复/彻除）',
					href: '/md/接口管理/API文档管理/接口回收站',
					icon: '接口回收站'
				}, {
					title: '版本管理（接口历史）',
					href: '/md/接口管理/API文档管理/版本管理',
					icon: '版本管理'
				}]
			}, {
				title: 'API基础测试',
				childList: [{
					title: '基础测试',
					href: '/md/接口管理/API基础测试/基础测试'
				}, {
					title: '测试增强插件',
					href: '/md/接口管理/API基础测试/测试增强插件'
				}, {
					title: '参数构造器',
					href: '/md/接口管理/API基础测试/参数构造器'
				}, {
					title: '智能表单',
					href: '/md/接口管理/API基础测试/智能表单'
				}, {
					title: '文件测试',
					href: '/md/接口管理/API基础测试/文件测试'
				}, {
					title: 'Restful API测试',
					href: '/md/接口管理/API基础测试/restful测试',
					icon: 'restful测试'
				}, {
					title: '源数据测试',
					href: '/md/接口管理/API基础测试/源数据测试',
				}, {
					title: '测试历史记录',
					href: '/md/接口管理/API基础测试/测试历史记录',
				}]
			}, {
				title: 'API自动化测试',
				childList: [{
					title: '简易模式(UI)',
					href: '/md/接口管理/API自动化测试/简易自动化测试',
					icon: '简易自动化测试'
				}, {
					title: '高级模式(代码)',
					href: '/md/接口管理/API自动化测试/高级自动化测试',
					icon: '高级自动化测试'
				}]
			}, {
				title: 'Mock API',
				childList: [{
					title: '基础Mock',
					href: '/md/接口管理/Mock API/基础Mock',
				}, {
					title: '高级Mock',
					href: '/md/接口管理/Mock API/高级Mock',
				}]
			}, {
				title: '状态码管理',
				childList: [{
					title: '分组管理',
					href: '/md/接口管理/状态码管理/分组管理'
				}, {
					title: '添加状态码（手动）',
					href: '/md/接口管理/状态码管理/添加状态码（手动）'
				}, {
					title: '添加状态码（批量导入）',
					href: '/md/接口管理/状态码管理/添加状态码（批量导入）'
				}, {
					title: '修改/删除状态码',
					href: '/md/接口管理/状态码管理/修改删除状态码'
				}]
			}, {
				title: '项目文档管理',
				icon: '项目文档',
				childList: [{
					title: '分组管理',
					href: '/md/接口管理/项目文档/分组管理'
				}, {
					title: '添加文档',
					href: '/md/接口管理/项目文档/添加文档'
				}, {
					title: '修改/删除文档',
					href: '/md/接口管理/项目文档/修改删除文档',
					icon: '修改删除文档'
				}, {
					title: '版本管理（文档历史）',
					href: '/md/接口管理/项目文档/版本管理',
					icon: '版本管理'
				}]
			}, {
				title: '环境管理',
				childList: [{
					title: '增/删/改环境',
					href: '/md/接口管理/环境管理/环境管理',
					icon: '环境管理'
				}, {
					title: '修改根路径（Base Url）',
					href: '/md/接口管理/环境管理/修改根路径',
					icon: '修改根路径'
				}, {
					title: '统一请求头部（Header）',
					href: '/md/接口管理/环境管理/添加统一头部',
					icon: "添加统一头部"
				}, {
					title: '额外请求参数',
					href: '/md/接口管理/环境管理/额外请求参数',
				}, {
					title: '全局变量',
					href: '/md/接口管理/环境管理/全局变量',
				}]
			}, {
				title: '协作管理',
				childList: [{
					title: '邀请成员加入',
					href: '/md/接口管理/协作管理/邀请成员加入',
				}, {
					title: '编辑/移除成员',
					href: '/md/接口管理/协作管理/编辑移除成员',
					icon: "编辑移除成员"
				}, {
					title: '转让项目所有权',
					href: '/md/接口管理/协作管理/转让项目所有权',
				}, {
					title: '查看项目操作历史',
					href: '/md/接口管理/协作管理/查看项目操作历史',
				}]
			}]
		}, {
			title: '接口管理-开源版',
			icon: '接口管理开源版',
			childList: [{
				title: '简介',
				href: '/md/接口管理开源版/简介'
			}, {
				title: '部署指南',
				href: '/md/接口管理开源版/部署指南'
			}, {
				title: '升级指南',
				href: '/md/接口管理开源版/升级指南'
			}, {
				title: '更新日志',
				href: '/md/接口管理开源版/更新日志'
			}, {
				title: '常见问题',
				href: '/md/接口管理开源版/常见问题'
			}]
		}, {
			title: '账户管理',
			childList: [{
				title: '基本操作',
				childList: [{
					title: '注册',
					href: '/md/账户管理/基本操作/注册',
				}, {
					title: '登录',
					href: '/md/账户管理/基本操作/登录',
				}, {
					title: '完善个人资料',
					href: '/md/账户管理/基本操作/完善个人资料'
				}, {
					title: '修改密码',
					href: '/md/账户管理/基本操作/修改密码'
				}, {
					title: '忘记密码',
					href: '/md/账户管理/基本操作/忘记密码'
				}]
			}, {
				title: '交易管理',
				childList: [{
					title: '查询交易记录',
					href: '/md/账户管理/交易管理/查询交易记录',
				}, {
					title: '发票管理',
					href: '/md/账户管理/交易管理/发票管理',
				}]
			}, {
				title: '客服支持',
				childList: [{
					title: '工单系统',
					href: '/md/账户管理/客服支持/工单系统',
				}, {
					title: '电话、邮件、客服Q群等',
					icon: '电话邮件系统',
					href: '/md/账户管理/客服支持/电话邮件系统',
				}]
			}]
		}]
	};
})()