/**
 * HostelController
 *
 * @description :: Server-side logic for managing Hostels
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {

	findHostelByName:function(req,res)
	{
		var nameToFind = req.param('name');
    Hostel.findOne({name:nameToFind}).exec(function(err,hostel)
		{

        if(err)
          res.json({error:err});

        if(hostel === undefined)
          res.json({notFound:true});

        else
          res.json({notFound:false,hostelData:hostel});
			});
	}
};
