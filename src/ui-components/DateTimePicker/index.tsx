import moment from 'moment'
import classNames from 'classnames'
import { CalendarTodayOutlined } from '@mui/icons-material'
import { InputAdornment } from '@mui/material'
import { MobileDateTimePicker } from '@mui/x-date-pickers'

export default function DateTimePicker(props: any) {
    const {
        classes,
        input_label,
        required,
        value,
        error,
        textFeildClasses,
        disabled,
        height,
        placeholder,
        readOnly,
        handleDateChange,
        format,
        disablePast,
        minDate,
    } = props

    return (
        <form
            autoComplete="off"
            onSubmit={(e) => {
                e.preventDefault()
            }}
            style={{
                display: 'flex',
                flexDirection: 'column',
            }}
        >
            {input_label && (
                <label
                style={{ fontSize: 14, paddingLeft: 12, color: "black" }}
                className={classNames(
                  classes.input_label_style,
                  error && classes.color_red
                )}
              >
                {input_label ?? ""}
                {required && !value ? <span style={{ color: "red" }}> *</span> : ""}
              </label>
            )}

            <MobileDateTimePicker
                value={value ? moment(value) : null}
                format={
                    typeof format === 'string' ? format : 'DD.MMM.YYYY HH:mm:ss'
                }
                disablePast={disablePast}
                minDate={minDate}
                ampm={false}
                sx={{
                    // '& .MuiInputBase-input.Mui-disabled': {
                    //     WebkitTextFillColor: '#181818',
                    // },
                }}
                slotProps={{
                    textField: {
                        error: error,
                        style: {
                            background: 'white',
                        },
                        placeholder,
                        inputProps: {
                            className: textFeildClasses,
                            style: {
                                fontFamily: 'Poppins-Regular',
                                fontSize: 16,
                                lineHeight: 'normal',
                                letterSpacing: 'normal',
                                color: '#181818',
                                background: disabled ? "#f6f6f6" : 'white',
                            },
                        },
                        InputProps: {
                            endAdornment: (
                                <InputAdornment
                                    position="end"
                                    style={{ background: 'white' }}
                                >
                                    <CalendarTodayOutlined
                                        style={{ fontSize: 24 }}
                                    />
                                </InputAdornment>
                            ),
                            style: {
                                height,
                                background: disabled ? "#f6f6f6" : 'white',
                            },
                            readOnly,
                        },
                    },
                }}
                readOnly={readOnly}
                disabled={disabled}
                onChange={handleDateChange}
            />
        </form>
    )
}

DateTimePicker.defaultProps = {
    value: null,
    input_label: '',
    fullWidth: true,
    required: false,
    error: false,
    classes: {},
    size: 'small',
    variant: 'outlined',
    textFeildClasses: '',
    disabled: false,
    height: 45,
    placeholder: '',
    readOnly: false,
    handleDateChange: () => {},
    format: 'DD.MMM.YYYY HH:mm',
    disablePast: false,
    minDate: null,
}
