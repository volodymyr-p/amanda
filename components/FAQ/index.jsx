import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ControlPointIcon from '@material-ui/icons/ControlPoint';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';

const topics = [{
    "title": "Wie setzen wir Projekte um?",
    "text": "Wir verwenden das Vorgehensmodell SCRUM für alle unsere Projekte. Solltest du SCRUM noch nicht kennen, wirst du von uns professionell und zielgerichtet eingearbeitet."
},
{
    "title": "Wie findet das Onboarding statt?",
    "text": "Wir wollen erfolgreiche Projekte, Teamplay und Synergie. Wir verfolgen ein einzigartiges 8-Phasen Modell in welchem wir dich Onboarden und unsere gemeinsame Kompatibilität evaluieren. Für dich entstehen bis zur Umsetzung keine Kosten. Für weitere Details kontaktieren uns bitte."
},
{
    "title": "Welche Branchen decken wir ab?",
    "text": "Wir unterscheiden nicht zwischen den einzelnen Branchen. Wir sehen dich als unseren Wissensträger und gemeinsamer Wegbegleiter. Gemeinsam erarbeiten wir Ziele und die Lösungen."
},
{
    "title": "Pflichtenheft, Offerte?",
    "text": "Die Qualität und Transparenz sind Standpfeiler unserer Firmenkultur. Wir sehen keine Zukunft in klassischen Pflichtheften, Wasserfallmodell und der Gleichen. Wir setzen ausschliesslich auf moderne, agile und zukunftsträchtige Vorgehensmodelle. Nur damit können wir ein Produkt für dich entwerfen, das deine realen Bedürfnisse erfüllt. Solltest du damit nicht einverstanden sein, passen wir leider nicht zusammen."
}];

const useStyles = makeStyles((theme) => ({
  root: {
    width: '80%',
    margin: '30px',
  },
  panel: {
    height: '50%',
    borderWidth: '2px',
    borderRightWidth: '0',
    borderStyle: 'solid',
    borderImage: 'linear-gradient(to left bottom, #ff8f00, #ffe180) 1 100%'
  },
  heading: {
    fontSize: 18,
    fontWeight: 700,
    fontFamily: "Raleway, serif",
    color: '#4c5462',
    minHeight: '30px',
  },
  text: {
    fontSize: 14,
    fontWeight: 500,
    fontFamily: "Raleway, serif",
    color: '#4c5462',
    textAlign: 'left'
  },
}));


const FAQ = () => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  let i = 0;
	return(
	<div className="faqContainer" id="FAQ">

		<div className="header">

			<h2>FREQUENTLY ASKED QUESTIONS</h2>

			<img src="img/divider.png" className="dividerImage"/>
		
			<div className="headerTitle">
					<p className="headerTitleText" >Fragen sind wichtig, denn über alles können wir hier nicht berichten. Doch die häufigsten Fragen beantworten wir dir gleich. Solltest du nachher noch weitere haben, kontaktier uns einfach.</p>
			</div>

      <div className="content">
        <div className="accordion">
          {
            topics.map((topic, i) => {
              i++;
              return(
                <div className={classes.root} key={i}>
                  <ExpansionPanel className={classes.panel} expanded={expanded === `panel${i}`} onChange={handleChange(`panel${i}`)}>
                    <ExpansionPanelSummary
                      expandIcon={expanded === `panel${i}` ? <RemoveCircleOutlineIcon style={{ fill: '#ff8f00' }}/> : <ControlPointIcon style={{ fill: '#ff8f00' }}/>}
                      aria-controls="panel3a-content"
                      id="panel3a-header"
                    >
                      <Typography className={classes.heading}>{topic.title}</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                      <Typography className={classes.text}>{topic.text}</Typography>
                    </ExpansionPanelDetails>
                  </ExpansionPanel>
                </div>
              )
            })
          }
        </div>

        <div className="meeting">
          <img src="img/meeting.png" className="meetingImg" alt=""/>
        </div>
      </div>

		</div>

		
		<style jsx>{`
      .meetingImg {
        object-fit: cover;
      }
      .accordion {
        width: 50%;
      }
      .meeting {
        heigth: 100%;
      }
      .content {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: row;
      }
      .faqContainer {
        padding-top: 150px;
        padding-bottom: 150px;
      }
			.dividerImage {
        object-fit: cover;
				width: 5%;
				height: auto;
			}
			.header {
				text-align: center;
				color: #4c5462;
				font-size: 20px;
			}
			.headerTitle {
				display: flex;
				justify-content: center;
        line-height: 20px;
				font-size: 15px;
			}
			.headerTitleText {
				width: 50%;
			}
		
      @media screen and (max-width: 1080px) {
        .content {
          flex-direction: column;
        }
        .accordion {
          width: 95%;
        }
      }

			@media screen and (max-width: 1370px) {
				.headerTitle {
					font-size: 13px;
				}
				.titleText {
					font-size: 15px;
					font-weight: 800;
					color: #4c5462;
				}
			}
			
			@media only screen and (max-width: 1000px) {
				.dividerImage {
					width: 20%;
				}
				.headerTitleText {
					width: 90%;
				}
			}
      @media (max-width: 769px) {
        .meeting {
          display: none;
        }
      }
      @media (min-width: 1500px) {
        .faqContainer {
          margin-left: 15%;
          margin-right: 15%;
        }
      }
		`}</style>
	</div>
	)
}

export default FAQ
