import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import ProductCarousel from "../components/ProductCarousel";
import Meta from "../components/Meta";
import Dropdown from "react-bootstrap/Dropdown";

const KnowYourCoffee = ({ match }) => {
  return (
    <div
      style={{
        fontFamily: "'Source Sans Pro', sans-serifsss",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          borderStyle: "solid",
          fontFamily: "'Courgette', cursive",
        }}
      >
        Know Your Coffee{" "}
      </h1>
      <h4 style={{ marginLeft: "1rem" }}>
        Know About Your Favorite Coffee Beans{" "}
      </h4>
      <div
        style={{
          display: "flex",
          justifyContent: "start",
          marginBottom: "3rem",
        }}
      >
        <div style={{ marginRight: "1rem", marginLeft: "2rem" }}>
          <Dropdown>
            <Dropdown.Toggle
              style={{ fontSize: "1rem" }}
              variant="Secondary"
              id="dropdown-basic"
            >
              Arabica
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">
                <p style={{ fontWeight: "1000" }}>
                  Coffea arabica, also known as the Arabic coffee.
                  <p>
                    It is believed to be the first species of coffee to have
                    been{" "}
                    <p>
                      cultivated and is currently the dominant cultivar,
                      representing about 60% of global production.
                      <p>
                        High-quality arabica coffee should have a slightly sweet
                        flavor, with hints of chocolate, nuts, and caramel.{" "}
                      </p>
                    </p>
                  </p>
                </p>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>

        <div style={{ marginRight: "1rem" }}>
          <Dropdown>
            <Dropdown.Toggle
              style={{ fontSize: "1rem" }}
              variant="Secondary"
              id="dropdown-basic"
            >
              Robusta
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">
                {" "}
                <p style={{ fontWeight: "1000" }}>
                  Robusta coffee is a type of coffee made from the beans (seeds)
                  of the Coffea canephora plant.
                  <p>
                    Robusta originated in central and western sub-Saharan
                    Africa.{" "}
                    <p>
                      It is the second most popular coffee in the world, making
                      up 40% of the worlds coffee production.
                      <p>
                        Robusta coffee tastes earthy and is often said to have a
                        bitter, rubbery/grain-like flavor, with a peanutty
                        aftertaste
                      </p>
                    </p>
                  </p>
                </p>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>

        <div style={{ marginRight: "1rem" }}>
          <Dropdown>
            <Dropdown.Toggle
              style={{ fontSize: "1rem" }}
              variant="Secondary"
              id="dropdown-basic"
            >
              Excelsa
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">
                <p style={{ fontWeight: "1000" }}>
                  Excelsa coffee beans are grown almost entirely in Southeast
                  Asia and represent only a tiny fraction of the world’s coffee
                  production.
                </p>
                <p>
                  Excelsa has a distinctive tart, fruity, dark, mysterious
                  taste. In blends, it enhances the middle{" "}
                </p>{" "}
                <p>
                  and back palate and lingering finish of the coffee, giving the
                  cup more substance and power.
                </p>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
      {/*  */}

      <h4 style={{ marginLeft: "1rem" }}>
        Check-it-out Whats's Your Favorite Hot Coffee Drinks
      </h4>
      <div
        style={{
          display: "flex",
          justifyContent: "start",
          marginBottom: "3rem",
        }}
      >
        <div style={{ marginRight: "1rem", marginLeft: "2rem" }}>
          <Dropdown>
            <Dropdown.Toggle
              style={{ fontSize: "0.9rem" }}
              variant="Secondary"
              id="dropdown-basic"
            >
              Black Coffee
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">
                <p style={{ fontWeight: "1000" }}>
                  Black coffee is rich in antioxidants, which can fight cell
                  damage and reduce your risk of serious health conditions like
                  cancer and heart disease.{" "}
                  <p>
                    Coffee is the primary source of antioxidants in most
                    American diets.{" "}
                  </p>
                  <p>
                    Black coffee also contains moderate amounts of vitamin B2
                    and magnesium.
                  </p>
                </p>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>

        <div style={{ marginRight: "1rem" }}>
          <Dropdown>
            <Dropdown.Toggle
              style={{ fontSize: "0.9rem" }}
              variant="Secondary"
              id="dropdown-basic"
            >
              Expresso
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">
                <p style={{ fontWeight: "1000" }}>
                  Espresso a strong brew of coffee produced by forcing boiled
                  water under pressure through finely ground coffee.{" "}
                  <p>
                    The finely ground coffee beans means an increased amount of
                    surface contact with the water, resulting in a highly
                    flavoured and aromatic brew
                  </p>
                </p>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>

        <div style={{ marginRight: "1rem" }}>
          <Dropdown>
            <Dropdown.Toggle
              style={{ fontSize: "0.9rem" }}
              variant="Secondary"
              id="dropdown-basic"
            >
              Latte
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">
                <p style={{ fontWeight: "1000" }}>
                  A latte or caffè latte is a milk coffee that is a made up of
                  one or two shots of espresso, steamed milk and a final,
                  <p>
                    {" "}
                    thin layer of frothed milk on top. If you don't drink dairy
                    milk,{" "}
                    <p>
                      you can easily swap it for a plant-based alternative like
                      soy, oat or coconut milk.
                    </p>
                  </p>
                </p>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <div style={{ marginRight: "1rem" }}>
          <Dropdown>
            <Dropdown.Toggle
              style={{ fontSize: "0.9rem" }}
              variant="Secondary"
              id="dropdown-basic"
            >
              Cappuccino
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">
                <p style={{ fontWeight: "1000" }}>
                  A cappuccino is the perfect balance of espresso, steamed milk
                  and foam. This coffee is all about the{" "}
                  <p>
                    {" "}
                    structure and the even splitting of all elements into equal
                    thirds. An expertly made cappuccino should be rich,{" "}
                    <p>
                      but not acidic and have a mildly sweet flavouring from the
                      milk.
                    </p>
                  </p>
                </p>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <div style={{ marginRight: "1rem" }}>
          <Dropdown>
            <Dropdown.Toggle
              style={{ fontSize: "0.9rem" }}
              variant="Secondary"
              id="dropdown-basic"
            >
              Macchiato
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">
                <p style={{ fontWeight: "1000" }}>
                  The macchiato is an espresso coffee drink, topped with a small
                  amount of foamed{" "}
                  <p>
                    or steamed milk to allow the taste of the espresso to still
                    shine through.
                    <p>
                      {" "}
                      A macchiato is perfect for those who find espresso too
                      harsh in flavour, but a cappuccino too weak.
                    </p>
                  </p>
                </p>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
      {/*  */}
      <h2 style={{ marginLeft: "1rem" }}>How's Your Day? Amigo's </h2>
      <div
        style={{
          display: "flex",
          justifyContent: "start",
          marginBottom: "3rem",
        }}
      >
        <div style={{ marginRight: "1rem", marginLeft: "2rem" }}>
          <Dropdown>
            <Dropdown.Toggle
              style={{ fontSize: "0.9rem" }}
              variant="Secondary"
              id="dropdown-basic"
            >
              Stressed
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">
                <p>
                  <p style={{ fontWeight: "1000" }}>
                    People often turn to a familiar cup of coffee when they’re
                    feeling stressed{" "}
                    <p>
                      "Iced coffee or black coffee" can offer a short-term
                      solution to stress.{" "}
                      <p>
                        The caffeine stimulates the central nervous system,{" "}
                        <p>
                          increasing the production of dopamine and serotonin.
                          These two neurotransmitters, known as ‘happy brain
                          chemicals,’{" "}
                          <p>
                            work to boost your mood and relieve feelings of
                            stress.
                          </p>
                        </p>{" "}
                      </p>
                    </p>
                  </p>
                </p>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>

        <div style={{ marginRight: "1rem" }}>
          <Dropdown>
            <Dropdown.Toggle
              style={{ fontSize: "0.9rem" }}
              variant="Secondary"
              id="dropdown-basic"
            >
              Freezing Cold
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">
                <p style={{ fontWeight: "1000" }}>
                  "A salted caramel or peppermint mocha" can keep you warm and
                  cozy.{" "}
                  <p>
                    {" "}
                    Or, if you want something a bit more gentle, a gingerbread
                    or a cinnamon latte will have you feeling toasty in no time.
                    <p>
                      A steaming hot cup of coffee can be effective for warming
                      up the body and the soul in those cold winter months.
                    </p>
                  </p>
                </p>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>

        <div style={{ marginRight: "1rem" }}>
          <Dropdown>
            <Dropdown.Toggle
              style={{ fontSize: "0.9rem" }}
              variant="Secondary"
              id="dropdown-basic"
            >
              Sleepy
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">
                <p style={{ fontWeight: "1000" }}>
                  If you’re looking for a quick dose of caffeine, perhaps first
                  thing in the morning or after a heavy lunch, an "Espresso
                  shot" is the way to go.{" "}
                  <p>
                    It’s well known that caffeine can increase alertness, so
                    it’s no surprise that many people turn to coffee when
                    they’re struggling to stay awake.
                  </p>
                </p>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>

        <div style={{ marginRight: "1rem" }}>
          <Dropdown>
            <Dropdown.Toggle
              style={{ fontSize: "0.9rem" }}
              variant="Secondary"
              id="dropdown-basic"
            >
              Jovial
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">
                <p style={{ fontWeight: "1000" }}>
                  Sometimes coffee drinkers find themselves in a good mood too.{" "}
                  <p></p>And if you’re feeling cheerful, a light roast is the
                  way to go. Its sweet scent{" "}
                  <p>
                    can match your mood, and you can taste and savor the natural
                    and fruity flavors
                  </p>
                </p>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
      {/*  */}
      <h2 style={{ marginLeft: "1rem" }}>What Your Coffee Says About You</h2>
      <div
        style={{
          display: "flex",
          justifyContent: "start",
          marginBottom: "3rem",
        }}
      >
        <div style={{ marginRight: "1rem", marginLeft: "2rem" }}>
          <Dropdown>
            <Dropdown.Toggle
              style={{ fontSize: "0.9rem" }}
              variant="Secondary"
              id="dropdown-basic"
            >
              Expresso
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">
                <p>
                  <p style={{ fontWeight: "1000" }}>
                    You're Friendly ,a natural leader,always on the go
                  </p>
                </p>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>

        <div style={{ marginRight: "1rem" }}>
          <Dropdown>
            <Dropdown.Toggle
              style={{ fontSize: "0.9rem" }}
              variant="Secondary"
              id="dropdown-basic"
            >
              Mocha
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">
                <p style={{ fontWeight: "1000" }}>
                  A free spirit , health-minded.
                </p>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>

        <div style={{ marginRight: "1rem" }}>
          <Dropdown>
            <Dropdown.Toggle
              style={{ fontSize: "0.9rem" }}
              variant="Secondary"
              id="dropdown-basic"
            >
              Black coffee
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">
                <p style={{ fontWeight: "1000" }}>
                  Old school, efficient, spontaneous{" "}
                </p>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>

        <div style={{ marginRight: "1rem" }}>
          <Dropdown>
            <Dropdown.Toggle
              style={{ fontSize: "0.9rem" }}
              variant="Secondary"
              id="dropdown-basic"
            >
              Latte or Cappuccino
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">
                <p style={{ fontWeight: "1000" }}>
                  Open-minded, limited boundaries
                </p>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>

        <div style={{ marginRight: "1rem" }}>
          <Dropdown>
            <Dropdown.Toggle
              style={{ fontSize: "0.9rem" }}
              variant="Secondary"
              id="dropdown-basic"
            >
              Instant coffee
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">
                <p style={{ fontWeight: "1000" }}>laid back,low-maintenance</p>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>

      {/*  */}

      <h2 style={{ marginLeft: "1rem" }}> 5 Coffee Personality Types </h2>
      <div
        style={{
          display: "flex",
          justifyContent: "start",
          marginBottom: "3rem",
        }}
      >
        <div style={{ marginRight: "1rem", marginLeft: "2rem" }}>
          <Dropdown>
            <Dropdown.Toggle
              style={{ fontSize: "0.9rem" }}
              variant="Secondary"
              id="dropdown-basic"
            >
              Black
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">
                <p>
                  <p style={{ fontWeight: "1000" }}>Purist</p>
                </p>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>

        <div style={{ marginRight: "1rem" }}>
          <Dropdown>
            <Dropdown.Toggle
              style={{ fontSize: "0.9rem" }}
              variant="Secondary"
              id="dropdown-basic"
            >
              Latte
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">
                <p style={{ fontWeight: "1000" }}>Comfort Seeker</p>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>

        <div style={{ marginRight: "1rem" }}>
          <Dropdown>
            <Dropdown.Toggle
              style={{ fontSize: "0.9rem" }}
              variant="Secondary"
              id="dropdown-basic"
            >
              Espresso
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">
                <p style={{ fontWeight: "1000" }}>Honest</p>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>

        <div style={{ marginRight: "1rem" }}>
          <Dropdown>
            <Dropdown.Toggle
              style={{ fontSize: "0.9rem" }}
              variant="Secondary"
              id="dropdown-basic"
            >
              Cappuccino
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">
                <p style={{ fontWeight: "1000" }}>Perfectionist</p>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>

        <div style={{ marginRight: "1rem" }}>
          <Dropdown>
            <Dropdown.Toggle
              style={{ fontSize: "0.9rem" }}
              variant="Secondary"
              id="dropdown-basic"
            >
              Decaf
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">
                <p style={{ fontWeight: "1000" }}>In Control</p>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>

      {/*  */}
    </div>
  );
};

export default KnowYourCoffee;
