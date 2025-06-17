"use client";

import {
    Box,
    Button,
    Typography,
    Checkbox,
    FormControlLabel,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Snackbar,
    Alert,
    MenuItem,
    InputLabel,
    Select,
    TextField,
    FormControl,
    Menu,
    Paper,
} from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const industryList = [
    { value: "communication-services", label: "Communication Services" },
    { value: "consumer-discretionary", label: "Consumer Discretionary" },
    { value: "consumer-staples", label: "Consumer Staples" },
    { value: "energy", label: "Energy" },
    { value: "financials", label: "Financials" },
    { value: "health-care", label: "Health Care" },
    { value: "industrials", label: "Industrials" },
    { value: "information-technology", label: "Information Technology" },
    { value: "materials", label: "Materials" },
    { value: "real-estate", label: "Real Estate" },
    { value: "utilities", label: "Utilities" },
];
const companySizeList = [
    { value: "0-50", label: "0-50 employees" },
    { value: "50-200", label: "50-200 employees" },
    { value: "200-500", label: "200-500 employees" },
    { value: "500-1000", label: "500-1000 employees" },
    { value: "1000-5000", label: "1000-5000 employees" },
    { value: "5000-10000", label: "5000-10000 employees" },
    { value: "10000+", label: "10000+ employees" },
];
const turnoverList = [
    { value: "0-10M", label: "$0-10M" },
    { value: "10-50M", label: "$10-50M" },
    { value: "50-200M", label: "$50-200M" },
    { value: "200-500M", label: "$200-500M" },
    { value: "500M-1B", label: "$500M-1B" },
    { value: "1B+", label: "$1B+" },
];


const StyledBox = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.secondary.light,
    color: theme.palette.text.primary,
    padding: theme.spacing(4),
    borderRadius: "16px",
    border: `1px solid ${theme.palette.secondary.dark}`,
}));

const StyledTextField = styled(TextField)(({ theme }) => ({
    "& .MuiOutlinedInput-root": {
        "&.Mui-focused fieldset": {
            borderColor: theme.palette.secondary.main,
        },
    },
}));

const StyledSelect = styled(Select)(({ theme }) => ({
    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
        borderColor: theme.palette.secondary.main,
    },
    // Change the color of the dropdown arrow (icon)
    '& .MuiSelect-icon': {
        color: theme.palette.text.primary,
    },
}));

const StyledInputLabel = styled(InputLabel)(({ theme }) => ({
    color: theme.palette.text.secondary,
    '&.Mui-focused': {
        color: theme.palette.text.secondary,
    },
    '&.MuiInputLabel-shrink': {
        color: theme.palette.text.secondary,
    },
}));

// Custom MenuProps per background del menu a tendina
const getMenuProps = (theme) => ({
    PaperProps: {
        sx: {
            backgroundColor: theme.palette.background.dark,
            color: theme.palette.text.primary,
        },
    },
});

export default function RegistrationForm() {
    const theme = useTheme();
    const router = useRouter();
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        companyName: "",
        industry: "",
        country: "",
        companySize: "",
        turnover: "",
        terms: false,
    });
    const [countryList, setCountryList] = useState([]);
    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);
    // const [fileName, setFileName] = useState("");
    const [snackbarOpen, setSnackbarOpen] = useState(false);

    useEffect(() => {
        const fetchCountries = async () => {
            try {
                // Try to get from localStorage first
                const cached = localStorage.getItem("countryList");
                if (cached) {
                    setCountryList(JSON.parse(cached));
                    return;
                }
                // Use lighter endpoint
                const res = await fetch('https://restcountries.com/v3.1/all?fields=name');
                if (!res.ok) throw new Error("API error");
                const data = await res.json();
                const countries = data.map(country => country.name.common).sort();
                setCountryList(countries);
                localStorage.setItem("countryList", JSON.stringify(countries));
            } catch (err) {
                setCountryList(["Italy", "France", "Germany", "Spain", "United Kingdom", "United States"]);
            }
        };
        fetchCountries();
    }, []);

    const handleChange = (e) => {
        const { name, value, type, checked, files } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : type === "file" ? files[0] : value,
        }));
        /*
        if (type === "file" && files.length) {
            setFileName(files[0].name);
        }*/
    };

    const validate = () => {
        const newErrors = {};
        if (!formData.fullName) newErrors.fullName = "Required";
        if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Valid email required";
        if (!formData.companyName) newErrors.companyName = "Required";
        if (!formData.industry) newErrors.industry = "Required";
        if (!formData.country) newErrors.country = "Required";
        if (!formData.companySize) newErrors.companySize = "Required";
        if (!formData.turnover) newErrors.turnover = "Required";
        if (!formData.terms) newErrors.terms = "Accept required";
        return newErrors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const validationErrors = validate();
        setErrors(validationErrors);
        if (Object.keys(validationErrors).length === 0) {
            // Prepare form data for backend
            const data = new FormData();
            data.append("fullName", formData.fullName);
            data.append("email", formData.email);
            data.append("companyName", formData.companyName);
            data.append("industry", formData.industry);
            data.append("country", formData.country);
            data.append("companySize", formData.companySize);
            data.append("turnover", formData.turnover);
            data.append("terms", formData.terms);


            const jsonObject = {};
            for (const [key, value] of data.entries()) {
                jsonObject[key] = value;
            }

            const jsonString = JSON.stringify(jsonObject);

            console.log("JSON String to be sent:", jsonString);
            /* 
               if (formData.file) {
                   data.append("pdfName", formData.file.name); // Only send the file name, not the file itself
               }*/
            try {
                // Use the Next.js API route as a proxy to avoid CORS issues
                const response = await fetch("/api/company_form_next", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: jsonString,
                });
                if (response.ok) {
                     router.push("/ThankYouPage"); // reindirizza qui
                } else {
                    
                    setSnackbarOpen(false);
                }
            } catch (error) {
              
                setSnackbarOpen(false);
            }
        }
    };

    return (<>
        <Box maxWidth="md" mx="auto" sx={{ color: theme.palette.text.primary }}>
            <Typography variant="h4" fontWeight="bold" color="secondary.main" gutterBottom>
                Be the First to Know
            </Typography>
            <Typography variant="body1" color="text.secondary" mb={4}>
                Leave your contact details to receive early updates about our product launch.
            </Typography>

            <StyledBox component="form" onSubmit={handleSubmit} noValidate>
                <Typography variant="h6" color="secondary.main" gutterBottom>
                    Personal Information
                </Typography>

                <StyledTextField
                    label="Full Name"
                    name="fullName"
                    fullWidth
                    margin="normal"
                    value={formData.fullName}
                    onChange={handleChange}
                    error={!!errors.fullName}
                    helperText={errors.fullName}
                    InputLabelProps={{ style: { color: theme.palette.text.secondary } }}
                    InputProps={{ style: { color: theme.palette.text.primary } }}
                />

                <StyledTextField
                    label="Company Email"
                    name="email"
                    type="email"
                    fullWidth
                    margin="normal"
                    value={formData.email}
                    onChange={handleChange}
                    error={!!errors.email}
                    helperText={errors.email}
                    InputLabelProps={{ style: { color: theme.palette.text.secondary } }}
                    InputProps={{ style: { color: theme.palette.text.primary } }}
                />

                <Typography variant="h6" color="secondary.main" mt={4} gutterBottom>
                    Company Information
                </Typography>

                <StyledTextField
                    label="Company Name"
                    name="companyName"
                    fullWidth
                    margin="normal"
                    value={formData.companyName}
                    onChange={handleChange}
                    error={!!errors.companyName}
                    helperText={errors.companyName}
                    InputLabelProps={{ style: { color: theme.palette.text.secondary } }}
                    InputProps={{ style: { color: theme.palette.text.primary } }}
                />

                <FormControl fullWidth margin="normal" error={!!errors.industry}>
                    <StyledInputLabel>Industry</StyledInputLabel>
                    <StyledSelect
                        name="industry"
                        value={formData.industry}
                        onChange={handleChange}
                        MenuProps={getMenuProps(theme)}
                    >
                        <MenuItem value="">Select sector</MenuItem>

                        {industryList.map(({ value, label }) => (
                            <MenuItem key={value} value={value}>{label}</MenuItem>
                        ))}
                    </StyledSelect>
                </FormControl>

                <FormControl fullWidth margin="normal" error={!!errors.country}>
                    <StyledInputLabel>Country</StyledInputLabel>
                    <StyledSelect
                        name="country"
                        value={formData.country}
                        onChange={handleChange}
                        MenuProps={getMenuProps(theme)}
                    >
                        <MenuItem value="">Select country</MenuItem>
                        {countryList.map((c) => (
                            <MenuItem key={c} value={c}>
                                {c}
                            </MenuItem>
                        ))}
                    </StyledSelect>
                </FormControl>

                <FormControl fullWidth margin="normal" error={!!errors.companySize}>
                    <StyledInputLabel>Company Size</StyledInputLabel>
                    <StyledSelect
                        name="companySize"
                        value={formData.companySize}
                        onChange={handleChange}
                        MenuProps={getMenuProps(theme)}
                    >
                        <MenuItem value="">Select size</MenuItem>
                        {companySizeList.map(({ value, label }) => (
                            <MenuItem key={value} value={value}>{label}</MenuItem>
                        ))}
                    </StyledSelect>
                </FormControl>

                <FormControl fullWidth margin="normal" error={!!errors.turnover}>
                    <StyledInputLabel>Annual Turnover</StyledInputLabel>
                    <StyledSelect
                        name="turnover"
                        value={formData.turnover}
                        onChange={handleChange}
                        MenuProps={getMenuProps(theme)}
                    >
                        <MenuItem value="">Select turnover</MenuItem>
                        {turnoverList.map(({ value, label }) => (
                            <MenuItem key={value} value={value}>{label}</MenuItem>
                        ))}
                    </StyledSelect>
                </FormControl>

                {/* <Box mt={2}>
                    <Button component="label" variant="outlined" startIcon={<UploadFileIcon />} color="secondary">
                        Upload Sustainability Report (PDF)
                        <input type="file" hidden accept=".pdf" name="file" onChange={handleChange} />
                    </Button>
                    {fileName && (
                        <Typography variant="body2" mt={1} color="text.secondary">
                            File: {fileName}
                        </Typography>
                    )}
                </Box> */}

                <FormControlLabel
                    control={
                        <Checkbox
                            name="terms"
                            checked={formData.terms}
                            onChange={handleChange}
                            color="secondary"
                        />
                    }
                    label="I accept Terms and Privacy Policy"
                    sx={{ color: theme.palette.text.secondary }}
                />
                {errors.terms && (
                    <Typography variant="caption" color="error" display="block">
                        {errors.terms}
                    </Typography>
                )}

                <Box mt={3}>
                    <Button type="submit" variant="contained" color="secondary" fullWidth>
                        Book my Demo
                    </Button>
                </Box>
            </StyledBox>

            <Dialog open={submitted} onClose={() => setSubmitted(false)}>
                <DialogTitle>Success</DialogTitle>
                <DialogContent>
                    <Box textAlign="center" py={2}>
                        <CheckCircleIcon color="success" fontSize="large" />
                        <Typography variant="h6" mt={2}>
                            Registration Successful!
                        </Typography>
                        <Typography variant="body2">We'll be in touch with updates.</Typography>
                    </Box>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setSubmitted(false)}>Close</Button>
                </DialogActions>
            </Dialog>

            <Snackbar open={snackbarOpen} autoHideDuration={3000} onClose={() => setSnackbarOpen(false)}>
                <Alert severity="success" variant="filled" onClose={() => setSnackbarOpen(false)}>
                    Submission received!
                </Alert>
            </Snackbar>


        </Box>
        {/*<iframe title="GREENBOOST" width="1140" height="541.25" src="https://app.powerbi.com/reportEmbed?reportId=23243e41-f873-44c8-bb02-f8401a4e05a1&appId=0eeaeba7-8a9f-4d6f-970e-aeccb21c3762&autoAuth=true&ctid=0b72a633-b4d5-4deb-bea8-d1d1c0dbed4d" frameborder="0" allowFullScreen="true"></iframe>*/}
    </>
    );
}
