sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'MyProject3/Risks/test/integration/FirstJourney',
		'MyProject3/Risks/test/integration/pages/RisksList',
		'MyProject3/Risks/test/integration/pages/RisksObjectPage'
    ],
    function(JourneyRunner, opaJourney, RisksList, RisksObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('MyProject3/Risks') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheRisksList: RisksList,
					onTheRisksObjectPage: RisksObjectPage
                }
            },
            opaJourney.run
        );
    }
);