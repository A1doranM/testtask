import SVGjson from '../json/SVGjson';
const INIT_TABLE_ALL_TRACKERS = 'INIT_TABLE_ALL_TRACKERS';

let initialState = {
    SVGjson: SVGjson,

    columns: [
        {name: 'id', title: 'ID'},
        {name: 'trackerNumber', title: 'Tracker number'},
        {name: 'creationDate', title: 'Date of creation'},
        {name: 'updateDate', title: 'Date of update'},
        {name: 'clearanceDate', title: 'Clearance date'},
        {name: 'invoiceNumber', title: 'Invoice number'},
        {name: 'deliveryDate', title: 'Delivery date'},
        {name: 'status', title: 'Status'},
        {name: 'carrier', title: 'Carrier'},
        {name: 'containerNumber', title: 'Container number'},
        {name: 'totalWeight', title: 'Total weight'},
        {name: 'volumeWeight', title: 'Volume weight'},
        {name: 'assessedValue', title: 'Assessed value'},
        {name: 'dutySize', title: 'Duty size'},
        {name: 'controlValue', title: 'Control value'},
        {name: 'deliveryRate', title: 'Delivery rate'},
        {name: 'deliveryCurrency', title: 'Delivery currency'},
        {name: 'totalShippingCost', title: 'TotalShippingCost'},
        {name: 'valuationCurrency', title: 'Valuation currency'},
        {name: 'senderPhoneNumber', title: 'Senders phone number'},
        {name: 'senderEmail', title: 'Sender email'},
        {name: 'senderCompanyName', title: 'senderCompanyName'},
        {name: 'senderCountry', title: 'Sender country'},
        {name: 'recipientPhoneNumber', title: 'Recipient phone number'},
        {name: 'recipientEmail', title: 'Recipient email'},
        {name: 'recipientCompanyName', title: 'recipientCompanyName'},
        {name: 'recipientCountry', title: 'Recipient country'},
        {name: 'recipientWorkerFullName', title: 'Full name of recipient worker'},
        {name: 'giveOutWorkerFullName', title: 'Full name of give out worker'},
        {name: 'edit', title: 'Edit'},
    ],

    rows: [
        {
            id: '0',
            trackerNumber: '0',
            creationDate: new Date('2018-09-28, 12:06:28').toLocaleString(),
            updateDate: new Date('2018-09-28, 12:06:28').toLocaleString(),
            clearanceDate: new Date('2018-09-28, 12:06:28').toLocaleString(),
            invoiceNumber: '123',
            deliveryDate: new Date('2018-09-28, 12:06:28').toLocaleString(),
            status: 'unprocessed',
            carrier: 'Maersk',
            containerNumber: '12312412425',
            totalWeight: '444444',
            volumeWeight: '24',
            assessedValue: '12',
            dutySize: '312',
            controlValue: '2123',
            deliveryRate: '124',
            deliveryCurrency: 'qewqq1',
            totalShippingCost: '1232312312312312312312312',
            valuationCurrency: '123123',
            senderPhoneNumber: '+3123123',
            senderEmail: '@@@@@',
            senderCompanyName: 'asdasd',
            senderCountry: 'asdasdaas',
            recipientPhoneNumber: '+3123123',
            recipientEmail: '@@@@@@',
            recipientCompanyName: 'asdasdasdasd',
            recipientCountry: 'asdasdasaaaaaa',
            recipientWorkerFullName: 'rockkkk',
            giveOutWorkerFullName: 'aaasdaweqwqwr',
            edit: 'edit'
        },
        {
            id: '1',
            trackerNumber: '0',
            creationDate: new Date('2018-02-28, 12:06:28').toLocaleString(),
            updateDate: new Date('2018-02-28, 12:06:28').toLocaleString(),
            clearanceDate: new Date('2018-02-28, 12:06:28').toLocaleString(),
            invoiceNumber: '123',
            deliveryDate: new Date('2018-09-28, 12:06:28').toLocaleString(),
            status: 'paid',
            carrier: 'Maersk',
            containerNumber: '12312412425',
            totalWeight: '444444',
            volumeWeight: '24',
            assessedValue: '12',
            dutySize: '312',
            controlValue: '2123',
            deliveryRate: '124',
            deliveryCurrency: 'qewqq1',
            totalShippingCost: '1232312312312312312312312',
            valuationCurrency: '123123',
            senderPhoneNumber: '+3123123',
            senderEmail: '@@@@@',
            senderCompanyName: 'asdasd',
            senderCountry: 'asdasdaas',
            recipientPhoneNumber: '+3123123',
            recipientEmail: '@@@@@@',
            recipientCompanyName: 'asdasdasdasd',
            recipientCountry: 'asdasdasaaaaaa',
            recipientWorkerFullName: 'rockkkk',
            giveOutWorkerFullName: 'aaasdaweqwqwr',
            edit: 'edit'
        },
        {
            id: '2',
            trackerNumber: '0',
            creationDate: new Date('2018-01-28, 12:06:28').toLocaleString(),
            updateDate: new Date('2018-01-28, 12:06:28').toLocaleString(),
            clearanceDate: new Date('2018-01-28, 12:06:28').toLocaleString(),
            invoiceNumber: '123',
            deliveryDate: new Date('2018-01-28, 12:06:28').toLocaleString(),
            status: 'processed',
            carrier: 'Maersk',
            containerNumber: '12312412425',
            totalWeight: '444444',
            volumeWeight: '24',
            assessedValue: '12',
            dutySize: '312',
            controlValue: '2123',
            deliveryRate: '124',
            deliveryCurrency: 'qewqq1',
            totalShippingCost: '0',
            valuationCurrency: '123123',
            senderPhoneNumber: '+3123123',
            senderEmail: '@@@@@',
            senderCompanyName: 'asdasd',
            senderCountry: 'asdasdaas',
            recipientPhoneNumber: '+3123123',
            recipientEmail: '@@@@@@',
            recipientCompanyName: 'asdasdasdasd',
            recipientCountry: 'asdasdasaaaaaa',
            recipientWorkerFullName: 'rockkkk',
            giveOutWorkerFullName: 'aaasdaweqwqwr',
            edit: 'edit'
        }
    ]
};

export const TableAllTrackersReducer = (state = initialState, action) => {
    switch (action.type) {
        case INIT_TABLE_ALL_TRACKERS:
            return {
                ...state,
            };
        default:
            return state;
    }
};

export const initTableAllTrackersActionCreator = () => {
    return {
        type: INIT_TABLE_ALL_TRACKERS,
    }
};
