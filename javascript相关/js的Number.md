# js的Number

### Number
##### 什么是Number

number是javascript中5大基本数据类型中的其中之一，用于存储和数字相关的数据。

##### 创建方式
    
    //常见方式:
    var num = 10;
    //其他方式1:
    var num = new Number(10);  
    //其他方式2:
    var num = Number(10);

##### 常见特性
1. 自动进行进制转换

        `var num = 0x12;//自动转换成16进制      
        var num = 07;//自动转换成8进制
        var num ＝ 08;//这个是错误的8进制，所以自动转换成整数8.
        ⚠️八进制字面量在严格模式下是无效的，会导致js引擎抛出错误。
2. 所有 JavaScript 数字均为 64 位

    > JavaScript                 不是类型语言。与许多其他编程语言不同，JavaScript     不定义不同类型的数字，比如整数、短、长、浮点    等等。
    JavaScript 中的所有数字都存储为根为 10 的 64     位（8 比特），浮点数。
        
3. 精度

    精度整数（不使用小数点或指数计数法）最多为 15     位。小数的最大位数是 17，但是浮点运算并不总是     100% 准确。
    
##### 属性：

1. MAX_VALUE
    
    可表示的最大的数。
2. MIN_VALUE

    可表示的最小的数。
3. NEGATIVE_INFINITY

    表示小于Number.MIN_VALUE的值。即负无穷。
4. POSITIVE_INFINITIVE

    表示大于Number.MAX_VALUE的值。即正无穷。
5. NaN
    
    代表非数字的特殊值，该属性用于指示某个值不是数字.
6. prototype
7. constructor
        

##### 函数

1. toString()
    把数字转换成字符串，使用指定的进制。
2. toLocaleString()
    不知道是啥，跟上面的返回值一样。
3. toFixed()
    保留小数。
4. toExponential()
    转换为指数计数法。
5. toPrecision()
    什么鬼
6. valueOf（）
    返回数。