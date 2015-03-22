/**
 * HostelController
 *
 * @description :: Server-side logic for managing Hostels
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {

	findHostel:function(req,res)
	{
		var hostelToFind = req.param('hostel');
		Hostel.findOne({city:hostelToFind}).exec(function(err,hostel)
		{
				if(err)
				{
					res.json({error:err});
				}

				if(hostel === undefined)
				{
						Hostel.findOne({name:hostelToFind}).exec(function(err,hostel)
						{
								if(err)
								{
									res.json({error:err});
								}

								if(hostel === undefined)
									res.json({notFound:true});

								else
									res.json({notFound:false,hostelData:hostel});


							});
				}

				else
					res.json({notFound:false,hostelData:hostel});


			});
	}

};
