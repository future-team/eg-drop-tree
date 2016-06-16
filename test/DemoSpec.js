'use strict';

// To know the usage of `assert`, see: http://nodejs.org/api/assert.html
//var assert = require('assert');
import assert from 'assert';

describe("multidata", function(){
  it("Comparing the two data", function(){
    let mockMultiDropData=[
      {
        "typeName": "第1.0级",
        "children": [
          {
            "typeName": "第2.0级",
            "children": [
              {
                "typeName": "第3.0级",
                "children": [ ],
                "leaf":true
              },
              {
                "typeName":"第3.1级",
                "children": [{
                  "typeName":"第4.0级",
                  "children": [
                    {
                      "typeName":"第5.0级",
                      "children": [ ],
                      "leaf":true
                    },
                    {
                      "typeName": "第5.1级",
                      "children": [ ]
                    },
                    {
                      "typeName": "第5.2级",
                      "children": [ ],
                      "leaf":true
                    }]
                },
                  {
                    "typeName": "第3.2级",
                    "children": [ ]
                  },
                  {
                    "typeName": "第3.3级",
                    "children": [ ],
                    "leaf":true
                  }]
              },
              {
                "typeName": "第3.2级",
                "children": [ ]
              },
              {
                "typeName": "第3.3级",
                "children": [ ],
                "leaf":true
              }
            ]
          },
          {
            "typeName": "第2.1级",
            "children": [ ],
            "leaf":true
          }
        ]
      }];
    let app= function(data,callback){
      var func=(data)=>{
        for(let i=0;i<data.length;i++){
          callback(data[i]);
          if(data[i]&&data[i].children){
            func(data[i].children);
          }
        }
      };
      func(data)
    };
    app(mockMultiDropData,function(data){
      console.log(data.children)
    })
  });


});

