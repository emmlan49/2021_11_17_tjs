import React from "react";
import { connect } from "react-redux";

import PropTypes from "prop-types";
import Button from "../Button/Button";
import styles from "./MemeForm.module.scss";
import { CURRENT_PUBLIC_ACTIONS } from "../../store/store";

function MemeForm(props) {
  return (
    <div data-testid="MemeForm" className={styles.MemeForm}>
      <form>
        <h2>Titre</h2>
        <input
          type="text"
          id="f_titre"
          placeholder="Saisir titre"
          value={props.meme.titre}
          onChange={(evt) =>
            props.onMemeChange({ ...props.meme, titre: evt.target.value })
          }
        />

        <h2>Image</h2>
        <select
          value={props.meme.imageId}
          id="f_image"
          onChange={(evt) =>
            props.onMemeChange({
              ...props.meme,
              imageId: Number(evt.target.value),
            })
          }
        >
          <option value="-1">Aucune</option>
          {props.images.map((e, i) => (
            <option key={i} value={e.id}>
              {e.titre}
            </option>
          ))}
        </select>

        <h2>Text</h2>
        <input
          type="text"
          value={props.meme.text}
          id="f_text"
          onChange={(evt) =>
            props.onMemeChange({ ...props.meme, text: evt.target.value })
          }
        />

        <h2>Color</h2>
        <input
          type="color"
          value={props.meme.color}
          id="f_color"
          onChange={(evt) =>
            props.onMemeChange({ ...props.meme, color: evt.target.value })
          }
        />

        <h2>Decorations</h2>
        <div className={styles.half}>
          <div>
            <label htmlFor="f_size">Font-size:</label>
            <input
              id="f_size"
              type="number"
              min="0"
              step="1"
              className={styles.smallInput}
              value={props.meme.fontSize}
              onChange={(evt) =>
                props.onMemeChange({
                  ...props.meme,
                  fontSize: Number(evt.target.value),
                })
              }
            />
          </div>
          <div>
            <label htmlFor="f_weigth">Font-weigth:</label>
            <input
              id="f_weigth"
              type="number"
              className={styles.smallInput}
              value={props.meme.fontWeight}
              min="100"
              max="900"
              step="100"
              onChange={(evt) =>
                props.onMemeChange({
                  ...props.meme,
                  fontWeight: Number(evt.target.value),
                })
              }
            />
          </div>
        </div>

        <div className={styles.half}>
          <div>
            <label htmlFor="f_underline">Underline:</label>
            <input
              id="f_underline"
              type="checkbox"
              className={styles.smallInput}
              checked={props.meme.underline}
              onChange={(evt) =>
                props.onMemeChange({
                  ...props.meme,
                  underline: evt.target.checked,
                })
              }
            />
          </div>
          <div>
            <label htmlFor="f_italic">italic:</label>
            <input
              id="f_italic"
              type="checkbox"
              className={styles.smallInput}
              checked={props.meme.italic}
              onChange={(evt) =>
                props.onMemeChange({
                  ...props.meme,
                  italic: evt.target.checked,
                })
              }
            />
          </div>
        </div>

        <h2>Position</h2>
        <div className={styles.half}>
          <div>
            <label htmlFor="f_x">x:</label>
            <input
              id="f_x"
              type="number"
              className={styles.smallInput}
              value={props.meme.x}
              onChange={(evt) =>
                props.onMemeChange({
                  ...props.meme,
                  x: Number(evt.target.value),
                })
              }
            />
          </div>
          <div>
            <label htmlFor="f_y">y:</label>
            <input
              id="f_y"
              type="number"
              className={styles.smallInput}
              value={props.meme.y}
              onChange={(evt) =>
                props.onMemeChange({
                  ...props.meme,
                  y: Number(evt.target.value),
                })
              }
            />
          </div>
        </div>

        <div className={styles.half}>
          <Button
            type="reset"
            bgColor="tomato"
            text="Clear"
            onButtonClicked={() => {}}
          />
          <Button
            type="submit"
            bgColor="green"
            text="Save"
            onButtonClicked={() => {}}
          />
        </div>
      </form>
    </div>
  );
}

MemeForm.propTypes = {
  meme: PropTypes.object.isRequired,
  images: PropTypes.array.isRequired,
  onMemeChange: PropTypes.func.isRequired,
};

// on ajoute aux props les infos du store
// mapping champs
function mapStateToProps(state, own) {
  return {
    ...own,
    meme: state.current,
    images: state.ressources.images,
  };
}

// dispatch
function mapDispatchToProps(dispatch) {
  return {
    // on ajoute la fonction de "onMemeChange" qui rappelle le dispatch
    onMemeChange: (meme) =>
      dispatch({ type: CURRENT_PUBLIC_ACTIONS.UPDATE_CURRENT, value: meme }),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(MemeForm);
