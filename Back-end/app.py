from flask import Flask, render_template, request, jsonify
from flask_cors import CORS
import numpy as np
import tensorflow as tf
from keras.models import load_model
import pickle

# initialize our Flask application and the Keras model
app = Flask(__name__)
CORS(app)

def init():
    global classifier, sc, graph
    # load the pre-trained Keras model
    classifier = load_model('models/bankChurnPrediction1.h5')
    # load the fitted StandardScaler
    scalerfile = 'scaler.sav'
    sc = pickle.load(open(scalerfile, 'rb'))
    graph = tf.get_default_graph()

# Getting ANN Parameters
def getNNParameters():
    form_params = request.get_json()

    nn_params = []

    if (form_params['country'] == 'France'):
        nn_params.append(0)
        nn_params.append(0) 
    elif (form_params['country'] == 'Spain'):
        nn_params.append(0)
        nn_params.append(1) 
    else:
        nn_params.append(1)
        nn_params.append(0)

    nn_params.append(form_params['creditScore'])
    nn_params.append(form_params['gender'])
    nn_params.append(form_params['age'])
    nn_params.append(form_params['tenure'])
    nn_params.append(form_params['balance'])
    nn_params.append(form_params['numOfProducts'])
    nn_params.append(form_params['hasCreditCard'])
    nn_params.append(form_params['isActiveMember'])
    nn_params.append(form_params['estimatedSalary'])
    
    return nn_params

# Homepage
@app.route("/")
def index():
    return 'This is the homepage'

# API for the prediction
@app.route("/predict", methods=["GET", "POST"])
def predict():
    nn_params = getNNParameters()
    
    with graph.as_default():
        # numpy horizontal vector // need to use dummy variable encodings // need feature scaling for this prediction
        new_prediction = classifier.predict(sc.transform(np.array([nn_params])))
    
    if new_prediction[0] > 0.5:
        prediction = 'true'
    else:
        prediction = 'false'
    
    print(nn_params)
    print(new_prediction[0])
    
    return prediction

# if this is the main thread of execution first load the model and then start the server
if __name__ == "__main__":
    print(("* Loading Keras model and Flask starting server... please wait until server has fully started"))
    init()
    app.run(threaded=True)