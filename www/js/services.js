angular.module('starter.services', [])

.factory('IMG', function() {

var imgArray = [{
	"id": 1,
	"name": "1.kép",
	"created": "2014.06.30",
	"size": 53,
	"URL": "data/img/10390953_734760556566032_8952032786678918369_n.jpg"
},
{
	"id": 2,
	"name": "2.kép",
	"created": "2014.06.30",
	"size": 41,
	"URL": "data/img/10403282_732066040168817_4088461545280517090_n.jpg"
},
{
	"id": 3,
	"name": "3.kép",
	"created": "2014.07.10",
	"size": 87,
	"URL": "data/img/adNmB1Q_460s.jpg"
},
{
	"id": 4,
	"name": "4.kép",
	"created": "2015.08.29",
	"size": 40,
	"URL": "data/img/aep4AKB_460s_v2.jpg"
},
{
	"id": 5,
	"name": "5.kép",
	"created": "2014.07.14",
	"size": 41,
	"URL": "data/img/aG93y96_460s.jpg"
},
{
	"id": 6,
	"name": "6.kép",
	"created": "2014.07.30",
	"size": 49,
	"URL": "data/img/aj6QqAR_460s_v1.jpg"
},
{
	"id": 7,
	"name": "7.kép",
	"created": "2014.10.28",
	"size": 31,
	"URL": "data/img/aKgE1gj_460s.jpg"
},
{
	"id": 8,
	"name": "8.kép",
	"created": "2014.07.10",
	"size": 26,
	"URL": "data/img/aLKyEM6_460s.jpg"
},
{
	"id": 9,
	"name": "9.kép",
	"created": "2015.08.02",
	"size": 34,
	"URL": "data/img/aLPxzzz_460s_v1.jpg"
},
{
	"id": 10,
	"name": "10.kép",
	"created": "2014.11.22",
	"size": 40,
	"URL": "data/img/amL6oBj_460s.jpg"
},
{
	"id": 11,
	"name": "11.kép",
	"created": "2014.11.26",
	"size": 34,
	"URL": "data/img/amLxLwX_460s_v1.jpg"
}]; 
    

  return {
    all: function() {
      return imgArray;
    },
    get: function(IMGid) {
      for (var i = 0; i < imgArray.length; i++) {
        if (imgArray[i].id === parseInt(IMGid)) {
          return imgArray[i];
        }
      }
      return null;
    }
  };
});
