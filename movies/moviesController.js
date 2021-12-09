const getMoviesList = (req,res)=>{
    res.send([
        {
            id:'101',
            title:'Superman'
        },
        {
            id:'102',
            title:'Ironman'
        },
        {
            id:'103',
            title:'Thor'
        },
])
}

module.exports = {getMoviesList};