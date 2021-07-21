// Import stylesheets
import './style.css';

// Write Javascript code!
// const appDiv = document.getElementById('app');
// appDiv.innerHTML = `<h1>JS Starter</h1>`;

// 2.5 一个简单的例子
// 以下实例绘制两个长方形：
function draw() {
  var canvas = document.getElementById('tutorial');
  if (!canvas.getContext) return;
  var ctx = canvas.getContext('2d');
  ctx.fillStyle = 'rgb(200,0,0)';
  //绘制矩形
  ctx.fillRect(10, 10, 55, 50);

  ctx.fillStyle = 'rgba(0, 0, 200, 0.5)';
  ctx.fillRect(30, 30, 55, 50);
}
draw();

// 3.2 绘制矩形
function draw() {
  var canvas = document.getElementById('tutorial');
  if (!canvas.getContext) return;
  var ctx = canvas.getContext('2d');
  ctx.fillRect(10, 10, 100, 50); // 绘制矩形，填充的默认颜色为黑色
  ctx.strokeRect(10, 70, 100, 50); // 绘制矩形边框
  ctx.clearRect(15, 15, 50, 25);
}
draw();

// 4.1 绘制线段
function draw() {
  var canvas = document.getElementById('tutorial');
  if (!canvas.getContext) return;
  var ctx = canvas.getContext('2d');
  ctx.beginPath(); // 新建一条path
  ctx.moveTo(50, 50); // 把画笔移动到指定的坐标
  ctx.lineTo(200, 50); // 绘制一条从当前位置到指定坐标（200, 50）的直线
  //闭合路径。会拉一条从当前点到path起始点的直线。如果当前点与起始点重合，则什么都不做
  ctx.closePath();
  ctx.stroke(); // 绘制路径
}
draw();

// 4.2 绘制三角形边框
function draw() {
  var canvas = document.getElementById('tutorial');
  if (!canvas.getContext) return;
  var ctx = canvas.getContext('2d');
  ctx.beginPath();
  ctx.moveTo(50, 50);
  ctx.lineTo(200, 50);
  ctx.lineTo(200, 200);
  ctx.closePath(); //虽然我们只绘制了两条线段，但是closePath会closePath，仍然是一个3角形
  ctx.stroke(); //描边。stroke不会自动closePath()
}
draw();

// 4.3 填充三角形
function draw() {
  var canvas = document.getElementById('tutorial');
  if (!canvas.getContext) return;
  var ctx = canvas.getContext('2d');
  ctx.beginPath();
  ctx.moveTo(50, 50);
  ctx.lineTo(200, 50);
  ctx.lineTo(200, 200);

  ctx.fill(); //填充闭合区域。如果path没有闭合，则fill()会自动闭合路径。
}
draw();

// 4.4 绘制圆弧
function draw() {
  var canvas = document.getElementById('tutorial');
  if (!canvas.getContext) return;
  var ctx = canvas.getContext('2d');
  ctx.beginPath();
  ctx.arc(50, 50, 40, 0, Math.PI / 2, false);
  ctx.stroke();
}

// 4.4 绘制圆弧 案例2
function draw() {
  var canvas = document.getElementById('tutorial');
  if (!canvas.getContext) return;
  var ctx = canvas.getContext('2d');
  ctx.beginPath();
  ctx.arc(50, 50, 40, 0, Math.PI / 2, false);
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(150, 50, 40, 0, -Math.PI / 2, true);
  ctx.closePath();
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(50, 150, 40, -Math.PI / 2, Math.PI / 2, false);
  // ctx.closePath();
  ctx.fill();

  ctx.beginPath();
  ctx.arc(150, 150, 40, 0, Math.PI, false);
  ctx.fill();
}

// 4.4 绘制圆弧 案例3
function draw() {
  var canvas = document.getElementById('tutorial');
  if (!canvas.getContext) return;
  var ctx = canvas.getContext('2d');
  ctx.beginPath();
  ctx.moveTo(50, 50);
  //参数1、2：控制点1坐标   参数3、4：控制点2坐标  参数4：圆弧半径
  ctx.arcTo(200, 50, 200, 200, 100);
  ctx.lineTo(200, 200);
  ctx.stroke();

  ctx.beginPath();
  ctx.rect(50, 50, 10, 10);
  ctx.rect(200, 50, 10, 10);
  ctx.rect(200, 200, 10, 10);
  ctx.fill();
}
draw();
