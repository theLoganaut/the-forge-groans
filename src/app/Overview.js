import React,  {useContext} from "react"
import ResourceBar from "./ResourceBar"
import DialogBox from "./DialogBox"
import { Button } from "react-bootstrap";
import { GameContext } from "./StateProvider";
import UpgradeButton from "./UpgradeButton";
import FadeIn from "./Animations/FadeIn";

const Overview = ({setScreen}) => {

  const { functionObj, milestones, upgrades } = useContext(GameContext);

  return (
    <div className="border-gray-100 ">
      {/* <ResourceBar />
      <DialogBox /> */}
      {milestones.overview.buildwall == true ? ( <div>
        <pre>
        <div>               <Button>.__.__. </Button></div>
        <div> #==+==+==+==+<Button>=|*-%-*|=</Button>+==+==+==+==#</div>
        <div>||‾‾‾‾‾‾‾‾‾‾‾‾<Button>\  #    /</Button>‾‾‾‾‾‾‾‾‾‾‾‾||</div>
        <div>||   `    .  &quot;        #       &lsquo;    ||</div>
        <div>||     &lsquo;  #  .       #     &quot;  .  * ||</div>
        <div>||   `             #     .    #    ||</div>
        <div>||  <Button onClick={()=> setScreen("scrapyard")}> _%\_ _(#|)</Button>   #   #      ,     ||</div>
        <div>||  <Button onClick={()=> setScreen("scrapyard")}>(*‾#)_,/#|%\,.</Button>  #     ____     ||</div>
        <div>||    &lsquo;*&quot;#.&lsquo;        #    <Button onClick={()=> setScreen("forge")}>{"//"}~‾\\</Button>    ||</div>
        <div>||       *   &lsquo;       #  <Button onClick={()=> setScreen("forge")}>||~ ~~||</Button>   ||</div>
        <div>||   #    `    .    #    <Button onClick={()=> setScreen("forge")}>\\_~{"//"}</Button>    ||</div>
        <div>||                _..     ‾‾‾‾     ||</div>
        <div>||  ,  &lsquo;  {milestones.overview.workshop == true ? (<Button onClick={()=> setScreen("workshop")}>/‾‾‾\___| | </Button>) : (<>            </>)}      . &lsquo;   .||</div>
        <div>||    .   {milestones.overview.workshop == true ? (<Button onClick={()=> setScreen("workshop")}>| # . +_|_\</Button>) : (<UpgradeButton nextPath={Object.entries(upgrades.unlocks.loadAmount)} location={"unlocks"} upgrade={"workshop"} />)}  #      *\   ||</div>
        <div>||  &quot;     {milestones.overview.workshop == true ? (<Button onClick={()=> setScreen("workshop")}>|_#_|,[____]</Button>) : (<>            </>)}   #  &quot;   .  ||</div>
        <div>||      #                #     &lsquo;   ||</div>
        <div>||   {milestones.overview.mechbay == true ? (<>_______ </>) : (<> #  . &quot; </>)}       #  #__   .     ||</div>
        <div>||  {milestones.overview.mechbay == true ? (<Button onClick={()=> setScreen("mechbay")}>{"//"}‾‾@‾‾\\</Button>) : (<>#     . &lsquo;</>)}    # #  {milestones.overview.factory == true ? (<Button onClick={()=> setScreen("factory")}>|###|</Button>) : (<> &quot; . </>)}     #  ||</div>
        <div>|| {milestones.overview.mechbay == true ? (<Button onClick={()=> setScreen("mechbay")}>|| %#M#& ||</Button>) : (<>  &lsquo;  .   # </>)}  #   {milestones.overview.factory == true ? (<Button onClick={()=> setScreen("factory")}>__/=*=\__</Button>) : (<></>)}{milestones.overview.factorybutton == true ? (<><Button className="border px-1 border-white">10 parts</Button></>) : (<></>)}{milestones.overview.factory == false && milestones.overview.factorybutton == false ? (<>#  . &quot;   </>) : (<></>)}  &lsquo;.  ||</div>
        <div>||  {milestones.overview.mechbay == true ? (<Button onClick={()=> setScreen("mechbay")}>\\_W_W_{"//"}    </Button>) : (<></>)}{milestones.overview.mechbaybutton == true ? (<><Button className="border px-1 border-white">5 robos</Button>     </>) : (<></>)}{milestones.overview.mechbay == false && milestones.overview.mechbaybutton == false ? (<>. &quot;  #    ,  </>) : (<></>)}{milestones.overview.factory == true ?(<Button onClick={()=> setScreen("factory")}>[#]_|_(#)_|_[#]</Button>) : (<> .        &quot;   .  # </>)}   ||</div>
        <div>||   {milestones.overview.mechbay == true ? (<>‾‾‾‾‾‾‾</>) : (<> . # &quot; </>)}  &lsquo;   &lsquo;.    . &quot;   .  &lsquo; ||</div>
        <div>||    # &lsquo; . .      # `      # .  ` ||</div>
        <div>||_________________________________||</div>
        <div>#==+==+==+==+==+==+==+==+==+==+==+==#</div>
        </pre>
      </div>) : (<div>
        <pre>
        <div>                       </div>
        <div>             <Button className="border border-white px-1">build wall</Button>     </div>
        <div>                                     </div>
        <div>    `    .  &quot;        #       &lsquo;    </div>
        <div>      &lsquo;  #  .       #     &quot;  .  * </div>
        <div>    `             #     .    #    </div>
        <div>   <Button onClick={()=> setScreen("scrapyard")}> _%\_ _(#|)</Button>   #   #      ,     </div>
        <div>   <Button onClick={()=> setScreen("scrapyard")}>(*‾#)_,/#|%\,.</Button>  #     ____     </div>
        <div>     &lsquo;*&quot;#.&lsquo;        #    <Button onClick={()=> setScreen("forge")}>{"//"}~‾\\</Button>    </div>
        <div>        *   &lsquo;       #  <Button onClick={()=> setScreen("forge")}>||~ ~~||</Button>   </div>
        <div>    #    `    .    #    <Button onClick={()=> setScreen("forge")}>\\_~{"//"}</Button>    </div>
        <div>                 _..     ‾‾‾‾     </div>
        <div>   ,  &lsquo;  {milestones.overview.workshop == true ? (<Button onClick={()=> setScreen("workshop")}><FadeIn isHidden={milestones.overview.workshop}>/‾‾‾\___| | </FadeIn></Button>) : (<>            </>)}      . &lsquo;   .</div>
        <div>     .   {milestones.overview.workshop == true ? (<Button onClick={()=> setScreen("workshop")}><FadeIn isHidden={milestones.overview.workshop}>| # . +_|_\</FadeIn></Button>) : (<Button onClick={() => functionObj.doUpgrade(upgrades.unlocks.workshop)} className="border border-white"> 10 metal  </Button>)}  #      *\   </div>
        <div>   &quot;     {milestones.overview.workshop == true ? (<Button onClick={()=> setScreen("workshop")}><FadeIn isHidden={milestones.overview.workshop}>|_#_|,[____]</FadeIn></Button>) : (<>            </>)}   #  &quot;   .  </div>
        <div>       #                #     &lsquo;   </div>
        <div>    {milestones.overview.mechbay == true ? (<>_______ </>) : (<> #  . &quot; </>)}       #  #__   .     </div>
        <div>   {milestones.overview.mechbay == true ? (<Button onClick={()=> setScreen("mechbay")}>{"//"}‾‾@‾‾\\</Button>) : (<>#     . &lsquo;</>)}    # #  {milestones.overview.factory == true ? (<Button onClick={()=> setScreen("factory")}>|###|</Button>) : (<> &quot; . </>)}     #  </div>
        <div>  {milestones.overview.mechbay == true ? (<Button onClick={()=> setScreen("mechbay")}>|| %#M#& ||</Button>) : (<>  &lsquo;  .   # </>)}  #   {milestones.overview.factory == true ? (<Button onClick={()=> setScreen("factory")}>__/=*=\__</Button>) : (<></>)}{milestones.overview.factorybutton == true ? (<><Button className="border px-1 border-white">10 parts</Button></>) : (<></>)}{milestones.overview.factory == false && milestones.overview.factorybutton == false ? (<>#  . &quot;   </>) : (<></>)}  &lsquo;.  </div>
        <div>   {milestones.overview.mechbay == true ? (<Button onClick={()=> setScreen("mechbay")}>\\_W_W_{"//"}    </Button>) : (<></>)}{milestones.overview.mechbaybutton == true ? (<><Button className="border px-1 border-white">5 robos</Button>     </>) : (<></>)}{milestones.overview.mechbay == false && milestones.overview.mechbaybutton == false ? (<>. &quot;  #    ,  </>) : (<></>)}{milestones.overview.factory == true ?(<Button onClick={()=> setScreen("factory")}>[#]_|_(#)_|_[#]</Button>) : (<> .        &quot;   .  # </>)}   </div>
        <div>    {milestones.overview.mechbay == true ? (<>‾‾‾‾‾‾‾</>) : (<> . # &quot; </>)}  &lsquo;   &lsquo;.    . &quot;   .  &lsquo; </div>
        <div>     # &lsquo; . .      # `      # .  ` </div>
        <div>                                     </div>
        <div>                                     </div>
        </pre>
      </div>)}
     
      
    </div>
  )
}

export default Overview