\```html
<!DOCTYPE html>
<html>
<head>
    <script src="https://cdn.plot.ly/plotly-latest.min.js"></script>
</head>
<body>

<div id="myDiv"></div>

<script src="path/to/your/javascript/file.js"></script>

</body>
</html>
\```
Replace `path/to/your/javascript/file.js` with the actual path to your JavaScript file.

In your JavaScript file, you would include the chart creation code:

```javascript
var data = [{
    type: "pie",
    values: [2, 3, 4, 4],
    labels: ["Wages", "Operating expenses", "Cost of sales", "Insurance"],
    textinfo: "label+percent",
    insidetextorientation: "radial"
  }]
  
  var layout = [{
    height: 700,
    width: 700
  }]
  
  Plotly.newPlot('myDiv', data, layout)