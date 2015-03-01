/**
 * Created by 小编络络 on 15-2-9.
 */
(function($) {
    $.fn.automap = function(opts) {

        var img = $(this);

        $("<img/>").attr('src',img.attr('src')).load(function(){
            console.log('loaded');

            //原始宽度
            var width_real = this.width;
            //显示宽度
            var width_show = img.width();
            //缩放比例
            var rate = width_show/width_real;

            //生成ID
            var map_id = 'automap'+($("map").length+1);

            img.attr('usemap','#'+map_id);

            var map = $('<map></map>');
            map.attr('name',map_id);
            map.attr('id',map_id);

            for(var i in opts){
                var coords = opts[i].coords.split(',');
                for(var j in coords){
                    coords[j] = Math.round(parseInt(coords[j]) * rate);
                }

                var area = $('<area/>');
                area.attr('shape',opts[i].shape);
                area.attr('coords',coords.join(','));
                area.attr('href',opts[i].href);

                area.appendTo(map);
                $("body").append(map);

            }
        });

    };
})(jQuery);