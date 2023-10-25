from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

printers = [
    {"id": 1, "name": "Dell", "type": "Laser", "paperTrayCapacity": 300},
    {"id": 2, "name": "HP", "type": "Led", "paperTrayCapacity": 125},
    {"id": 3, "name": "Samsung", "type": "Inkjet", "paperTrayCapacity": 250}
]
next_id = 4  

# CRUD operations
@app.route('/printers', methods=['GET'])
def get_printers():
    return jsonify({'printers': printers})

@app.route('/printers/<int:printer_id>', methods=['GET'])
def get_printer(printer_id):
    printer = next((p for p in printers if p['id'] == printer_id), None)
    if printer:
        return jsonify({'printer': printer})
    return jsonify({'message': 'Printers not found'}), 404

@app.route('/printers', methods=['POST'])
def add_printer():
    global next_id
    new_printer = {
        'id': next_id,
        'name': request.json['name'],
        'type': request.json['type'],
        'paperTrayCapacity': request.json['paperTrayCapacity']
    }
    printers.append(new_printer)
    next_id += 1
    return jsonify({'message': 'Printer added', 'printer': new_printer}), 201

@app.route('/printers/<int:printer_id>', methods=['PUT'])
def update_printer(printer_id):
    printer = next((p for p in printers if p['id'] == printer_id), None)
    if printer:
        printer['name'] = request.json['name']
        printer['type'] = request.json['type']
        printer['paperTrayCapacity'] = request.json['paperTrayCapacity']
        return jsonify({'message': 'Printer updated', 'printer': printer})
    return jsonify({'message': 'Printer not found'}), 404

@app.route('/printers/<int:printer_id>', methods=['DELETE'])
def delete_printer(printer_id):
    global printers
    printers = [p for p in printers if p['id'] != printer_id]
    return jsonify({'message': 'Printer deleted'})

@app.route('/calculate-paper', methods=['POST'])
def calculate_paper():
    data = request.json
    total_paper = sum(printer['paperTrayCapacity'] for printer in data)
    return jsonify({'totalPaper': total_paper})


@app.route('/sort-printers', methods=['POST'])
def sort_printers():
    data = request.json
    if 'field' in data and data['field'] in ['name', 'type', 'paperTrayCapacity']:
        sorted_printers = sorted(printers, key=lambda x: x[data['field']])
        return jsonify({'printers': sorted_printers})
    return jsonify({'message': 'Invalid sort field'}), 400

if __name__ == '__main__':
    app.run(debug=True)