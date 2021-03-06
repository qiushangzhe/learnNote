# mongoose
## 如何使用
1. 安装mongoose：

	```
	npm install mongoose
	```
2. 引用mongoose：

	```javascript
	var mongoose = require("mongoose");
	```

3. 使用"mongoose"连接数据库：

	```javascript
	var db = mongoose.connect("mongodb://user:pass@localhost:port/database");
	```
4. 执行下面代码检查默认数据库test，是否可以正常连接成功?

	```javascript
	var mongoose = require("mongoose");
	var db = mongoose.connect("mongodb://127.0.0.1:27017/test");
	db.connection.on("error", function (error) {
	    console.log("数据库连接失败：" + error);
	});
	db.connection.on("open", function () {
	    console.log("------数据库连接成功！------");
	});
	```
	
## 增 
1. 创建一个文档数据结构Schema：

	```javascript
	var mainSchema = new mongoose.Schema({
	    money : { type:String },
	    type  : { type:Number, default:0 },
	    time : { type:Date, default:Date.now }
	});
	```
	> 基本属性类型有：字符串、日期型、数值型、布尔型(Boolean)、null、数组、内嵌文档等。

2. 创建集合：  


	```javascript
	var mainModel = db.model("money", mainSchema);
	```

3. 创建Entity实体

	
	```javascript
	var montyRecord = new mainModel({
	    money:"100",
	    type:"1"
	});
	```

4. 保存一条记录

	```javascript
	montyRecord.save(function(error,doc){
	    if(error){
	        console.log("error :" + error);
	    }else{
	        console.log(doc);
	    }
	});
	```

4. 也可以直接这样保存

	```javascript
	montyRecord.create({
	    money:"100",
	    type:"1"
	  },function(error,doc){
	    console.log(doc);
	});
	```

## 删
函数原型：

```javascript
obj.remove(查询条件,callback);
```

实例：

```javascript
var conditions = { name: 'tom' };

TestModel.remove(conditions, function(error){
    if(error) {
        console.log(error);
    } else {
        console.log('Delete success!');
    }
});
```

## 改

函数原型:

    obj.update(查询条件,更新对象,callback);
    
实例：

    
```javascript
var conditions = {name : 'test_update'};

var update = {$set : { age : 16 }};

TestModel.update(conditions, update, function(error){
    if(error) {
        console.log(error);
    } else {
        console.log('Update success!');
    }
});
```

## 查
### 查询函数原型
```javascript
obj.find(查询条件,callback);
```

### 实例：
   
```javascript
Model.find({},function(error,docs){
   //若没有向find传递参数，默认的是显示所有文档
});

Model.find({ "age": 28 }, function (error, docs) {
  if(error){
    console.log("error :" + error);
  }else{
    console.log(docs); //docs: age为28的所有文档
  }
});
```


