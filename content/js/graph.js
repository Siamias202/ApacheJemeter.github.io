/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 9523.0, "minX": 0.0, "maxY": 160578.0, "series": [{"data": [[0.0, 9523.0], [0.1, 9523.0], [0.2, 9523.0], [0.3, 9523.0], [0.4, 9523.0], [0.5, 9523.0], [0.6, 9523.0], [0.7, 9523.0], [0.8, 9523.0], [0.9, 9523.0], [1.0, 9523.0], [1.1, 9523.0], [1.2, 9523.0], [1.3, 9523.0], [1.4, 9523.0], [1.5, 9523.0], [1.6, 9523.0], [1.7, 9523.0], [1.8, 9523.0], [1.9, 9523.0], [2.0, 9523.0], [2.1, 9523.0], [2.2, 9523.0], [2.3, 9523.0], [2.4, 9523.0], [2.5, 13230.0], [2.6, 13230.0], [2.7, 13230.0], [2.8, 13230.0], [2.9, 13230.0], [3.0, 13230.0], [3.1, 13230.0], [3.2, 13230.0], [3.3, 13230.0], [3.4, 13230.0], [3.5, 13230.0], [3.6, 13230.0], [3.7, 13230.0], [3.8, 13230.0], [3.9, 13230.0], [4.0, 13230.0], [4.1, 13230.0], [4.2, 13230.0], [4.3, 13230.0], [4.4, 13230.0], [4.5, 13230.0], [4.6, 13230.0], [4.7, 13230.0], [4.8, 13230.0], [4.9, 13230.0], [5.0, 14996.0], [5.1, 14996.0], [5.2, 14996.0], [5.3, 14996.0], [5.4, 14996.0], [5.5, 14996.0], [5.6, 14996.0], [5.7, 14996.0], [5.8, 14996.0], [5.9, 14996.0], [6.0, 14996.0], [6.1, 14996.0], [6.2, 14996.0], [6.3, 14996.0], [6.4, 14996.0], [6.5, 14996.0], [6.6, 14996.0], [6.7, 14996.0], [6.8, 14996.0], [6.9, 14996.0], [7.0, 14996.0], [7.1, 14996.0], [7.2, 14996.0], [7.3, 14996.0], [7.4, 14996.0], [7.5, 16412.0], [7.6, 16412.0], [7.7, 16412.0], [7.8, 16412.0], [7.9, 16412.0], [8.0, 16412.0], [8.1, 16412.0], [8.2, 16412.0], [8.3, 16412.0], [8.4, 16412.0], [8.5, 16412.0], [8.6, 16412.0], [8.7, 16412.0], [8.8, 16412.0], [8.9, 16412.0], [9.0, 16412.0], [9.1, 16412.0], [9.2, 16412.0], [9.3, 16412.0], [9.4, 16412.0], [9.5, 16412.0], [9.6, 16412.0], [9.7, 16412.0], [9.8, 16412.0], [9.9, 16412.0], [10.0, 17282.0], [10.1, 17282.0], [10.2, 17282.0], [10.3, 17282.0], [10.4, 17282.0], [10.5, 17282.0], [10.6, 17282.0], [10.7, 17282.0], [10.8, 17282.0], [10.9, 17282.0], [11.0, 17282.0], [11.1, 17282.0], [11.2, 17282.0], [11.3, 17282.0], [11.4, 17282.0], [11.5, 17282.0], [11.6, 17282.0], [11.7, 17282.0], [11.8, 17282.0], [11.9, 17282.0], [12.0, 17282.0], [12.1, 17282.0], [12.2, 17282.0], [12.3, 17282.0], [12.4, 17282.0], [12.5, 18169.0], [12.6, 18169.0], [12.7, 18169.0], [12.8, 18169.0], [12.9, 18169.0], [13.0, 18169.0], [13.1, 18169.0], [13.2, 18169.0], [13.3, 18169.0], [13.4, 18169.0], [13.5, 18169.0], [13.6, 18169.0], [13.7, 18169.0], [13.8, 18169.0], [13.9, 18169.0], [14.0, 18169.0], [14.1, 18169.0], [14.2, 18169.0], [14.3, 18169.0], [14.4, 18169.0], [14.5, 18169.0], [14.6, 18169.0], [14.7, 18169.0], [14.8, 18169.0], [14.9, 18169.0], [15.0, 18337.0], [15.1, 18337.0], [15.2, 18337.0], [15.3, 18337.0], [15.4, 18337.0], [15.5, 18337.0], [15.6, 18337.0], [15.7, 18337.0], [15.8, 18337.0], [15.9, 18337.0], [16.0, 18337.0], [16.1, 18337.0], [16.2, 18337.0], [16.3, 18337.0], [16.4, 18337.0], [16.5, 18337.0], [16.6, 18337.0], [16.7, 18337.0], [16.8, 18337.0], [16.9, 18337.0], [17.0, 18337.0], [17.1, 18337.0], [17.2, 18337.0], [17.3, 18337.0], [17.4, 18337.0], [17.5, 19560.0], [17.6, 19560.0], [17.7, 19560.0], [17.8, 19560.0], [17.9, 19560.0], [18.0, 19560.0], [18.1, 19560.0], [18.2, 19560.0], [18.3, 19560.0], [18.4, 19560.0], [18.5, 19560.0], [18.6, 19560.0], [18.7, 19560.0], [18.8, 19560.0], [18.9, 19560.0], [19.0, 19560.0], [19.1, 19560.0], [19.2, 19560.0], [19.3, 19560.0], [19.4, 19560.0], [19.5, 19560.0], [19.6, 19560.0], [19.7, 19560.0], [19.8, 19560.0], [19.9, 19560.0], [20.0, 24883.0], [20.1, 24883.0], [20.2, 24883.0], [20.3, 24883.0], [20.4, 24883.0], [20.5, 24883.0], [20.6, 24883.0], [20.7, 24883.0], [20.8, 24883.0], [20.9, 24883.0], [21.0, 24883.0], [21.1, 24883.0], [21.2, 24883.0], [21.3, 24883.0], [21.4, 24883.0], [21.5, 24883.0], [21.6, 24883.0], [21.7, 24883.0], [21.8, 24883.0], [21.9, 24883.0], [22.0, 24883.0], [22.1, 24883.0], [22.2, 24883.0], [22.3, 24883.0], [22.4, 24883.0], [22.5, 25197.0], [22.6, 25197.0], [22.7, 25197.0], [22.8, 25197.0], [22.9, 25197.0], [23.0, 25197.0], [23.1, 25197.0], [23.2, 25197.0], [23.3, 25197.0], [23.4, 25197.0], [23.5, 25197.0], [23.6, 25197.0], [23.7, 25197.0], [23.8, 25197.0], [23.9, 25197.0], [24.0, 25197.0], [24.1, 25197.0], [24.2, 25197.0], [24.3, 25197.0], [24.4, 25197.0], [24.5, 25197.0], [24.6, 25197.0], [24.7, 25197.0], [24.8, 25197.0], [24.9, 25197.0], [25.0, 25602.0], [25.1, 25602.0], [25.2, 25602.0], [25.3, 25602.0], [25.4, 25602.0], [25.5, 25602.0], [25.6, 25602.0], [25.7, 25602.0], [25.8, 25602.0], [25.9, 25602.0], [26.0, 25602.0], [26.1, 25602.0], [26.2, 25602.0], [26.3, 25602.0], [26.4, 25602.0], [26.5, 25602.0], [26.6, 25602.0], [26.7, 25602.0], [26.8, 25602.0], [26.9, 25602.0], [27.0, 25602.0], [27.1, 25602.0], [27.2, 25602.0], [27.3, 25602.0], [27.4, 25602.0], [27.5, 27287.0], [27.6, 27287.0], [27.7, 27287.0], [27.8, 27287.0], [27.9, 27287.0], [28.0, 27287.0], [28.1, 27287.0], [28.2, 27287.0], [28.3, 27287.0], [28.4, 27287.0], [28.5, 27287.0], [28.6, 27287.0], [28.7, 27287.0], [28.8, 27287.0], [28.9, 27287.0], [29.0, 27287.0], [29.1, 27287.0], [29.2, 27287.0], [29.3, 27287.0], [29.4, 27287.0], [29.5, 27287.0], [29.6, 27287.0], [29.7, 27287.0], [29.8, 27287.0], [29.9, 27287.0], [30.0, 28164.0], [30.1, 28164.0], [30.2, 28164.0], [30.3, 28164.0], [30.4, 28164.0], [30.5, 28164.0], [30.6, 28164.0], [30.7, 28164.0], [30.8, 28164.0], [30.9, 28164.0], [31.0, 28164.0], [31.1, 28164.0], [31.2, 28164.0], [31.3, 28164.0], [31.4, 28164.0], [31.5, 28164.0], [31.6, 28164.0], [31.7, 28164.0], [31.8, 28164.0], [31.9, 28164.0], [32.0, 28164.0], [32.1, 28164.0], [32.2, 28164.0], [32.3, 28164.0], [32.4, 28164.0], [32.5, 30839.0], [32.6, 30839.0], [32.7, 30839.0], [32.8, 30839.0], [32.9, 30839.0], [33.0, 30839.0], [33.1, 30839.0], [33.2, 30839.0], [33.3, 30839.0], [33.4, 30839.0], [33.5, 30839.0], [33.6, 30839.0], [33.7, 30839.0], [33.8, 30839.0], [33.9, 30839.0], [34.0, 30839.0], [34.1, 30839.0], [34.2, 30839.0], [34.3, 30839.0], [34.4, 30839.0], [34.5, 30839.0], [34.6, 30839.0], [34.7, 30839.0], [34.8, 30839.0], [34.9, 30839.0], [35.0, 31908.0], [35.1, 31908.0], [35.2, 31908.0], [35.3, 31908.0], [35.4, 31908.0], [35.5, 31908.0], [35.6, 31908.0], [35.7, 31908.0], [35.8, 31908.0], [35.9, 31908.0], [36.0, 31908.0], [36.1, 31908.0], [36.2, 31908.0], [36.3, 31908.0], [36.4, 31908.0], [36.5, 31908.0], [36.6, 31908.0], [36.7, 31908.0], [36.8, 31908.0], [36.9, 31908.0], [37.0, 31908.0], [37.1, 31908.0], [37.2, 31908.0], [37.3, 31908.0], [37.4, 31908.0], [37.5, 32137.0], [37.6, 32137.0], [37.7, 32137.0], [37.8, 32137.0], [37.9, 32137.0], [38.0, 32137.0], [38.1, 32137.0], [38.2, 32137.0], [38.3, 32137.0], [38.4, 32137.0], [38.5, 32137.0], [38.6, 32137.0], [38.7, 32137.0], [38.8, 32137.0], [38.9, 32137.0], [39.0, 32137.0], [39.1, 32137.0], [39.2, 32137.0], [39.3, 32137.0], [39.4, 32137.0], [39.5, 32137.0], [39.6, 32137.0], [39.7, 32137.0], [39.8, 32137.0], [39.9, 32137.0], [40.0, 32423.0], [40.1, 32423.0], [40.2, 32423.0], [40.3, 32423.0], [40.4, 32423.0], [40.5, 32423.0], [40.6, 32423.0], [40.7, 32423.0], [40.8, 32423.0], [40.9, 32423.0], [41.0, 32423.0], [41.1, 32423.0], [41.2, 32423.0], [41.3, 32423.0], [41.4, 32423.0], [41.5, 32423.0], [41.6, 32423.0], [41.7, 32423.0], [41.8, 32423.0], [41.9, 32423.0], [42.0, 32423.0], [42.1, 32423.0], [42.2, 32423.0], [42.3, 32423.0], [42.4, 32423.0], [42.5, 32621.0], [42.6, 32621.0], [42.7, 32621.0], [42.8, 32621.0], [42.9, 32621.0], [43.0, 32621.0], [43.1, 32621.0], [43.2, 32621.0], [43.3, 32621.0], [43.4, 32621.0], [43.5, 32621.0], [43.6, 32621.0], [43.7, 32621.0], [43.8, 32621.0], [43.9, 32621.0], [44.0, 32621.0], [44.1, 32621.0], [44.2, 32621.0], [44.3, 32621.0], [44.4, 32621.0], [44.5, 32621.0], [44.6, 32621.0], [44.7, 32621.0], [44.8, 32621.0], [44.9, 32621.0], [45.0, 32749.0], [45.1, 32749.0], [45.2, 32749.0], [45.3, 32749.0], [45.4, 32749.0], [45.5, 32749.0], [45.6, 32749.0], [45.7, 32749.0], [45.8, 32749.0], [45.9, 32749.0], [46.0, 32749.0], [46.1, 32749.0], [46.2, 32749.0], [46.3, 32749.0], [46.4, 32749.0], [46.5, 32749.0], [46.6, 32749.0], [46.7, 32749.0], [46.8, 32749.0], [46.9, 32749.0], [47.0, 32749.0], [47.1, 32749.0], [47.2, 32749.0], [47.3, 32749.0], [47.4, 32749.0], [47.5, 32996.0], [47.6, 32996.0], [47.7, 32996.0], [47.8, 32996.0], [47.9, 32996.0], [48.0, 32996.0], [48.1, 32996.0], [48.2, 32996.0], [48.3, 32996.0], [48.4, 32996.0], [48.5, 32996.0], [48.6, 32996.0], [48.7, 32996.0], [48.8, 32996.0], [48.9, 32996.0], [49.0, 32996.0], [49.1, 32996.0], [49.2, 32996.0], [49.3, 32996.0], [49.4, 32996.0], [49.5, 32996.0], [49.6, 32996.0], [49.7, 32996.0], [49.8, 32996.0], [49.9, 32996.0], [50.0, 34179.0], [50.1, 34179.0], [50.2, 34179.0], [50.3, 34179.0], [50.4, 34179.0], [50.5, 34179.0], [50.6, 34179.0], [50.7, 34179.0], [50.8, 34179.0], [50.9, 34179.0], [51.0, 34179.0], [51.1, 34179.0], [51.2, 34179.0], [51.3, 34179.0], [51.4, 34179.0], [51.5, 34179.0], [51.6, 34179.0], [51.7, 34179.0], [51.8, 34179.0], [51.9, 34179.0], [52.0, 34179.0], [52.1, 34179.0], [52.2, 34179.0], [52.3, 34179.0], [52.4, 34179.0], [52.5, 34693.0], [52.6, 34693.0], [52.7, 34693.0], [52.8, 34693.0], [52.9, 34693.0], [53.0, 34693.0], [53.1, 34693.0], [53.2, 34693.0], [53.3, 34693.0], [53.4, 34693.0], [53.5, 34693.0], [53.6, 34693.0], [53.7, 34693.0], [53.8, 34693.0], [53.9, 34693.0], [54.0, 34693.0], [54.1, 34693.0], [54.2, 34693.0], [54.3, 34693.0], [54.4, 34693.0], [54.5, 34693.0], [54.6, 34693.0], [54.7, 34693.0], [54.8, 34693.0], [54.9, 34693.0], [55.0, 35364.0], [55.1, 35364.0], [55.2, 35364.0], [55.3, 35364.0], [55.4, 35364.0], [55.5, 35364.0], [55.6, 35364.0], [55.7, 35364.0], [55.8, 35364.0], [55.9, 35364.0], [56.0, 35364.0], [56.1, 35364.0], [56.2, 35364.0], [56.3, 35364.0], [56.4, 35364.0], [56.5, 35364.0], [56.6, 35364.0], [56.7, 35364.0], [56.8, 35364.0], [56.9, 35364.0], [57.0, 35364.0], [57.1, 35364.0], [57.2, 35364.0], [57.3, 35364.0], [57.4, 35364.0], [57.5, 38499.0], [57.6, 38499.0], [57.7, 38499.0], [57.8, 38499.0], [57.9, 38499.0], [58.0, 38499.0], [58.1, 38499.0], [58.2, 38499.0], [58.3, 38499.0], [58.4, 38499.0], [58.5, 38499.0], [58.6, 38499.0], [58.7, 38499.0], [58.8, 38499.0], [58.9, 38499.0], [59.0, 38499.0], [59.1, 38499.0], [59.2, 38499.0], [59.3, 38499.0], [59.4, 38499.0], [59.5, 38499.0], [59.6, 38499.0], [59.7, 38499.0], [59.8, 38499.0], [59.9, 38499.0], [60.0, 39188.0], [60.1, 39188.0], [60.2, 39188.0], [60.3, 39188.0], [60.4, 39188.0], [60.5, 39188.0], [60.6, 39188.0], [60.7, 39188.0], [60.8, 39188.0], [60.9, 39188.0], [61.0, 39188.0], [61.1, 39188.0], [61.2, 39188.0], [61.3, 39188.0], [61.4, 39188.0], [61.5, 39188.0], [61.6, 39188.0], [61.7, 39188.0], [61.8, 39188.0], [61.9, 39188.0], [62.0, 39188.0], [62.1, 39188.0], [62.2, 39188.0], [62.3, 39188.0], [62.4, 39188.0], [62.5, 41257.0], [62.6, 41257.0], [62.7, 41257.0], [62.8, 41257.0], [62.9, 41257.0], [63.0, 41257.0], [63.1, 41257.0], [63.2, 41257.0], [63.3, 41257.0], [63.4, 41257.0], [63.5, 41257.0], [63.6, 41257.0], [63.7, 41257.0], [63.8, 41257.0], [63.9, 41257.0], [64.0, 41257.0], [64.1, 41257.0], [64.2, 41257.0], [64.3, 41257.0], [64.4, 41257.0], [64.5, 41257.0], [64.6, 41257.0], [64.7, 41257.0], [64.8, 41257.0], [64.9, 41257.0], [65.0, 42926.0], [65.1, 42926.0], [65.2, 42926.0], [65.3, 42926.0], [65.4, 42926.0], [65.5, 42926.0], [65.6, 42926.0], [65.7, 42926.0], [65.8, 42926.0], [65.9, 42926.0], [66.0, 42926.0], [66.1, 42926.0], [66.2, 42926.0], [66.3, 42926.0], [66.4, 42926.0], [66.5, 42926.0], [66.6, 42926.0], [66.7, 42926.0], [66.8, 42926.0], [66.9, 42926.0], [67.0, 42926.0], [67.1, 42926.0], [67.2, 42926.0], [67.3, 42926.0], [67.4, 42926.0], [67.5, 43009.0], [67.6, 43009.0], [67.7, 43009.0], [67.8, 43009.0], [67.9, 43009.0], [68.0, 43009.0], [68.1, 43009.0], [68.2, 43009.0], [68.3, 43009.0], [68.4, 43009.0], [68.5, 43009.0], [68.6, 43009.0], [68.7, 43009.0], [68.8, 43009.0], [68.9, 43009.0], [69.0, 43009.0], [69.1, 43009.0], [69.2, 43009.0], [69.3, 43009.0], [69.4, 43009.0], [69.5, 43009.0], [69.6, 43009.0], [69.7, 43009.0], [69.8, 43009.0], [69.9, 43009.0], [70.0, 43197.0], [70.1, 43197.0], [70.2, 43197.0], [70.3, 43197.0], [70.4, 43197.0], [70.5, 43197.0], [70.6, 43197.0], [70.7, 43197.0], [70.8, 43197.0], [70.9, 43197.0], [71.0, 43197.0], [71.1, 43197.0], [71.2, 43197.0], [71.3, 43197.0], [71.4, 43197.0], [71.5, 43197.0], [71.6, 43197.0], [71.7, 43197.0], [71.8, 43197.0], [71.9, 43197.0], [72.0, 43197.0], [72.1, 43197.0], [72.2, 43197.0], [72.3, 43197.0], [72.4, 43197.0], [72.5, 44104.0], [72.6, 44104.0], [72.7, 44104.0], [72.8, 44104.0], [72.9, 44104.0], [73.0, 44104.0], [73.1, 44104.0], [73.2, 44104.0], [73.3, 44104.0], [73.4, 44104.0], [73.5, 44104.0], [73.6, 44104.0], [73.7, 44104.0], [73.8, 44104.0], [73.9, 44104.0], [74.0, 44104.0], [74.1, 44104.0], [74.2, 44104.0], [74.3, 44104.0], [74.4, 44104.0], [74.5, 44104.0], [74.6, 44104.0], [74.7, 44104.0], [74.8, 44104.0], [74.9, 44104.0], [75.0, 44284.0], [75.1, 44284.0], [75.2, 44284.0], [75.3, 44284.0], [75.4, 44284.0], [75.5, 44284.0], [75.6, 44284.0], [75.7, 44284.0], [75.8, 44284.0], [75.9, 44284.0], [76.0, 44284.0], [76.1, 44284.0], [76.2, 44284.0], [76.3, 44284.0], [76.4, 44284.0], [76.5, 44284.0], [76.6, 44284.0], [76.7, 44284.0], [76.8, 44284.0], [76.9, 44284.0], [77.0, 44284.0], [77.1, 44284.0], [77.2, 44284.0], [77.3, 44284.0], [77.4, 44284.0], [77.5, 48036.0], [77.6, 48036.0], [77.7, 48036.0], [77.8, 48036.0], [77.9, 48036.0], [78.0, 48036.0], [78.1, 48036.0], [78.2, 48036.0], [78.3, 48036.0], [78.4, 48036.0], [78.5, 48036.0], [78.6, 48036.0], [78.7, 48036.0], [78.8, 48036.0], [78.9, 48036.0], [79.0, 48036.0], [79.1, 48036.0], [79.2, 48036.0], [79.3, 48036.0], [79.4, 48036.0], [79.5, 48036.0], [79.6, 48036.0], [79.7, 48036.0], [79.8, 48036.0], [79.9, 48036.0], [80.0, 48871.0], [80.1, 48871.0], [80.2, 48871.0], [80.3, 48871.0], [80.4, 48871.0], [80.5, 48871.0], [80.6, 48871.0], [80.7, 48871.0], [80.8, 48871.0], [80.9, 48871.0], [81.0, 48871.0], [81.1, 48871.0], [81.2, 48871.0], [81.3, 48871.0], [81.4, 48871.0], [81.5, 48871.0], [81.6, 48871.0], [81.7, 48871.0], [81.8, 48871.0], [81.9, 48871.0], [82.0, 48871.0], [82.1, 48871.0], [82.2, 48871.0], [82.3, 48871.0], [82.4, 48871.0], [82.5, 55869.0], [82.6, 55869.0], [82.7, 55869.0], [82.8, 55869.0], [82.9, 55869.0], [83.0, 55869.0], [83.1, 55869.0], [83.2, 55869.0], [83.3, 55869.0], [83.4, 55869.0], [83.5, 55869.0], [83.6, 55869.0], [83.7, 55869.0], [83.8, 55869.0], [83.9, 55869.0], [84.0, 55869.0], [84.1, 55869.0], [84.2, 55869.0], [84.3, 55869.0], [84.4, 55869.0], [84.5, 55869.0], [84.6, 55869.0], [84.7, 55869.0], [84.8, 55869.0], [84.9, 55869.0], [85.0, 57704.0], [85.1, 57704.0], [85.2, 57704.0], [85.3, 57704.0], [85.4, 57704.0], [85.5, 57704.0], [85.6, 57704.0], [85.7, 57704.0], [85.8, 57704.0], [85.9, 57704.0], [86.0, 57704.0], [86.1, 57704.0], [86.2, 57704.0], [86.3, 57704.0], [86.4, 57704.0], [86.5, 57704.0], [86.6, 57704.0], [86.7, 57704.0], [86.8, 57704.0], [86.9, 57704.0], [87.0, 57704.0], [87.1, 57704.0], [87.2, 57704.0], [87.3, 57704.0], [87.4, 57704.0], [87.5, 64949.0], [87.6, 64949.0], [87.7, 64949.0], [87.8, 64949.0], [87.9, 64949.0], [88.0, 64949.0], [88.1, 64949.0], [88.2, 64949.0], [88.3, 64949.0], [88.4, 64949.0], [88.5, 64949.0], [88.6, 64949.0], [88.7, 64949.0], [88.8, 64949.0], [88.9, 64949.0], [89.0, 64949.0], [89.1, 64949.0], [89.2, 64949.0], [89.3, 64949.0], [89.4, 64949.0], [89.5, 64949.0], [89.6, 64949.0], [89.7, 64949.0], [89.8, 64949.0], [89.9, 64949.0], [90.0, 67756.0], [90.1, 67756.0], [90.2, 67756.0], [90.3, 67756.0], [90.4, 67756.0], [90.5, 67756.0], [90.6, 67756.0], [90.7, 67756.0], [90.8, 67756.0], [90.9, 67756.0], [91.0, 67756.0], [91.1, 67756.0], [91.2, 67756.0], [91.3, 67756.0], [91.4, 67756.0], [91.5, 67756.0], [91.6, 67756.0], [91.7, 67756.0], [91.8, 67756.0], [91.9, 67756.0], [92.0, 67756.0], [92.1, 67756.0], [92.2, 67756.0], [92.3, 67756.0], [92.4, 67756.0], [92.5, 68195.0], [92.6, 68195.0], [92.7, 68195.0], [92.8, 68195.0], [92.9, 68195.0], [93.0, 68195.0], [93.1, 68195.0], [93.2, 68195.0], [93.3, 68195.0], [93.4, 68195.0], [93.5, 68195.0], [93.6, 68195.0], [93.7, 68195.0], [93.8, 68195.0], [93.9, 68195.0], [94.0, 68195.0], [94.1, 68195.0], [94.2, 68195.0], [94.3, 68195.0], [94.4, 68195.0], [94.5, 68195.0], [94.6, 68195.0], [94.7, 68195.0], [94.8, 68195.0], [94.9, 68195.0], [95.0, 77671.0], [95.1, 77671.0], [95.2, 77671.0], [95.3, 77671.0], [95.4, 77671.0], [95.5, 77671.0], [95.6, 77671.0], [95.7, 77671.0], [95.8, 77671.0], [95.9, 77671.0], [96.0, 77671.0], [96.1, 77671.0], [96.2, 77671.0], [96.3, 77671.0], [96.4, 77671.0], [96.5, 77671.0], [96.6, 77671.0], [96.7, 77671.0], [96.8, 77671.0], [96.9, 77671.0], [97.0, 77671.0], [97.1, 77671.0], [97.2, 77671.0], [97.3, 77671.0], [97.4, 77671.0], [97.5, 160578.0], [97.6, 160578.0], [97.7, 160578.0], [97.8, 160578.0], [97.9, 160578.0], [98.0, 160578.0], [98.1, 160578.0], [98.2, 160578.0], [98.3, 160578.0], [98.4, 160578.0], [98.5, 160578.0], [98.6, 160578.0], [98.7, 160578.0], [98.8, 160578.0], [98.9, 160578.0], [99.0, 160578.0], [99.1, 160578.0], [99.2, 160578.0], [99.3, 160578.0], [99.4, 160578.0], [99.5, 160578.0], [99.6, 160578.0], [99.7, 160578.0], [99.8, 160578.0], [99.9, 160578.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 9500.0, "maxY": 1.0, "series": [{"data": [[9500.0, 1.0], [13200.0, 1.0], [14900.0, 1.0], [16400.0, 1.0], [17200.0, 1.0], [18300.0, 1.0], [18100.0, 1.0], [19500.0, 1.0], [24800.0, 1.0], [25100.0, 1.0], [25600.0, 1.0], [27200.0, 1.0], [28100.0, 1.0], [30800.0, 1.0], [31900.0, 1.0], [32700.0, 1.0], [32400.0, 1.0], [32600.0, 1.0], [32100.0, 1.0], [32900.0, 1.0], [34100.0, 1.0], [34600.0, 1.0], [35300.0, 1.0], [38400.0, 1.0], [39100.0, 1.0], [160500.0, 1.0], [42900.0, 1.0], [41200.0, 1.0], [43000.0, 1.0], [44200.0, 1.0], [43100.0, 1.0], [44100.0, 1.0], [48800.0, 1.0], [48000.0, 1.0], [55800.0, 1.0], [57700.0, 1.0], [64900.0, 1.0], [67700.0, 1.0], [68100.0, 1.0], [77600.0, 1.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 160500.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 2.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 39.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 39.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 1.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 1.0, "minX": 1.69159662E12, "maxY": 20.0, "series": [{"data": [[1.69159662E12, 20.0], [1.6915968E12, 1.0], [1.69159668E12, 13.580645161290319]], "isOverall": false, "label": "Thread login", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6915968E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 14996.0, "minX": 1.0, "maxY": 93932.5, "series": [{"data": [[8.0, 28164.0], [2.0, 14996.0], [9.0, 17282.0], [10.0, 41257.0], [11.0, 57704.0], [12.0, 39188.0], [3.0, 18169.0], [13.0, 32137.0], [14.0, 50408.0], [15.0, 51224.5], [16.0, 44104.0], [4.0, 18337.0], [1.0, 93932.5], [17.0, 43197.0], [18.0, 48036.0], [19.0, 51080.333333333336], [20.0, 31486.800000000003], [5.0, 43597.0], [6.0, 25197.0], [7.0, 43009.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[14.075000000000005, 39366.09999999999]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 20.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 1.9, "minX": 1.69159662E12, "maxY": 391999.8, "series": [{"data": [[1.69159662E12, 88516.45], [1.6915968E12, 12685.783333333333], [1.69159668E12, 391999.8]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.69159662E12, 13.3], [1.6915968E12, 1.9], [1.69159668E12, 58.9]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6915968E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 23360.285714285717, "minX": 1.69159662E12, "maxY": 93932.5, "series": [{"data": [[1.69159662E12, 23360.285714285717], [1.6915968E12, 93932.5], [1.69159668E12, 39459.90322580645]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6915968E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 454.5714285714286, "minX": 1.69159662E12, "maxY": 1271.0, "series": [{"data": [[1.69159662E12, 454.5714285714286], [1.6915968E12, 1271.0], [1.69159668E12, 574.0967741935482]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6915968E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 387.8571428571429, "minX": 1.69159662E12, "maxY": 1083.0, "series": [{"data": [[1.69159662E12, 387.8571428571429], [1.6915968E12, 1083.0], [1.69159668E12, 401.74193548387103]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6915968E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 9523.0, "minX": 1.69159662E12, "maxY": 77671.0, "series": [{"data": [[1.69159662E12, 32996.0], [1.6915968E12, 27287.0], [1.69159668E12, 77671.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.69159662E12, 13230.0], [1.6915968E12, 27287.0], [1.69159668E12, 9523.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.69159662E12, 32996.0], [1.6915968E12, 27287.0], [1.69159668E12, 67194.6]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.69159662E12, 32996.0], [1.6915968E12, 27287.0], [1.69159668E12, 77671.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.69159662E12, 24883.0], [1.6915968E12, 27287.0], [1.69159668E12, 38499.0]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.69159662E12, 32996.0], [1.6915968E12, 27287.0], [1.69159668E12, 71985.39999999998]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6915968E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 30839.0, "minX": 1.0, "maxY": 160578.0, "series": [{"data": [[1.0, 30839.0], [2.0, 37276.0], [4.0, 43650.5], [3.0, 36840.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[1.0, 160578.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 4.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 153.5, "minX": 1.0, "maxY": 1932.0, "series": [{"data": [[1.0, 309.0], [2.0, 414.0], [4.0, 347.5], [3.0, 153.5]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[1.0, 1932.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 4.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.69159662E12, "maxY": 0.45, "series": [{"data": [[1.69159662E12, 0.45], [1.6915968E12, 0.016666666666666666], [1.69159668E12, 0.2]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6915968E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.69159662E12, "maxY": 0.5166666666666667, "series": [{"data": [[1.69159662E12, 0.11666666666666667], [1.6915968E12, 0.016666666666666666], [1.69159668E12, 0.5166666666666667]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.6915968E12, 0.016666666666666666]], "isOverall": false, "label": "Non HTTP response code: java.net.SocketException", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6915968E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.69159662E12, "maxY": 0.5166666666666667, "series": [{"data": [[1.69159662E12, 0.11666666666666667], [1.6915968E12, 0.016666666666666666], [1.69159668E12, 0.5166666666666667]], "isOverall": false, "label": "HTTP Request-success", "isController": false}, {"data": [[1.6915968E12, 0.016666666666666666]], "isOverall": false, "label": "HTTP Request-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6915968E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.69159662E12, "maxY": 0.5166666666666667, "series": [{"data": [[1.69159662E12, 0.11666666666666667], [1.6915968E12, 0.016666666666666666], [1.69159668E12, 0.5166666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.6915968E12, 0.016666666666666666]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6915968E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

