var fellowTimeline = {
 
    init: function() {
        fellowTimeline.createStory();
    },

    createStory: function(){
        createStoryJS({
            type:       'timeline',
            width:      '1270',
            height:     '650',
            source:     timelineData,
            embed_id:   'fellow-timeline',
            start_zoom_adjust: -2
        });
    }
 
};
 
$(document).ready(fellowTimeline.init);