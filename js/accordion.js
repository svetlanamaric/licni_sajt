   $(function() {
            $("#accordion-prviPrimer").accordion();
        })

        ;
        $(function() {
            $("#accordion-drugiPrimer").accordion({
                collapsible: true
            });
        });

        $(function() {
            var icons = {
                header: "ui-icon-circle-arrow-e",
                activeHeader: "ui-icon-circle-arrow-s"
            };
            $("#accordion-treciPrimer").accordion({
                icons: icons
            });
            $("#toggle").button().on("click", function() {
                if ($("#accordion-treciPrimer").accordion("option", "icons")) {
                    $("#accordion-treciPrimer").accordion("option", "icons", null);
                } else {
                    $("#accordion-treciPrimer").accordion("option", "icons", icons);
                }
            });
        });
        $(function() {
            $("#accordion-cetvrtiPrimer").accordion({
                heightStyle: "fill"
            });

            $("#accordion-resizer").resizable({
                minHeight: 140,
                minWidth: 200,
                resize: function() {
                    $("#accordion-3").accordion("refresh");
                }
            });
        });
        $(function() {
            $("#accordion-petiPrimer").accordion({
                heightStyle: "content"
            });
        });
        $(function() {
            $("#accordion-sestiPrimer")
                .accordion({
                    header: "> div > h3"
                })
                .sortable({
                    axis: "y",
                    handle: "h3",
                    stop: function(event, ui) {
                        ui.item.children("h3").triggerHandler("focusout");
                        $(this).accordion("refresh");
                    }
                });
        });