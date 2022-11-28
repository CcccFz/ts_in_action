// 数字枚举
enum Role {
	Teacher = 1,
	Student,
	Admin = 10
}
console.log(Role.Student)
console.log(Role.Admin)

// 字符串枚举
enum Message {
	Success = '恭喜你，成功了',
	Fail = '抱歉，失败了'
}

// 常量枚举
const enum Month {
	Jan,
	Feb,
	Mar,
}
console.log(Month.Mar);

