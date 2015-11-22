new Vue({    
    el: '#recipes',    
    ready:function(){
    this.fetchRecipes();
},
    data: {
        recipes : []
    },
        methods:{
        fetchRecipes:function(){
            this.$http.get('https://orthodox:union@es.content-index.oustatic.com:8443/rsstage_oukosher_org/_search', {q:"post_type:recipes"},
                function(data){
                this.$set('recipes', data.hits.hits)
            }).error(function(status){
                //handle error
                console.log(status);
            }); 
        }
    }
});